const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  method: {
    type: String,
    enum: ["local", "google"],
    required: true
  },
  local: {
    id: {
      type: Number
    },
    firstname: {
      type: String,
      lowercase: false
    },
    lastname: {
      type: String,
      lowercase: false
    },
    city: {
      type: String,
      lowercase: false
    },
    country: {
      type: String,
      lowercase: false
    },
    email: {
      type: String,
      lowercase: true
    },
    password: {
      type: String
    },
    apikey: {
      type: String,
      lowercase: true
    }
  },
  google: {
    //google id property
    id: {
      type: Number
    },
    firstname: {
      type: String,
      lowercase: false
    },
    lastname: {
      type: String,
      lowercase: false
    },
    city: {
      type: String,
      lowercase: false
    },
    country: {
      type: String,
      lowercase: false
    },
    email: {
      type: String,
      lowercase: true
    },
    password: {
      type: String
    },
    apikey: {
      type: String,
      lowercase: true
    }
  }
});

// this will trigger when the user.save() is called.
userSchema.pre("save", async function(next) {
  try {
    // if the method is google oauth, skip.
    if (this.method !== "local") {
      next();
    }
    // generate the salt
    const salt = await bcrypt.genSalt(10);
    //generate the password hash (salt + hash)
    const passHash = await bcrypt.hash(this.local.password, salt);
    // Re-assign hashed version over the original plain text version
    this.local.password = passHash;
  } catch (error) {
    next(error);
  }
});

userSchema.methods.isValidPassword = async function(passwordIn) {
  try {
    return await bcrypt.compare(passwordIn, this.local.password);
  } catch (error) {
    throw new Error(error);
  }
};

// create a model
const user = mongoose.model("user", userSchema);

// Export the model
module.exports = user;
