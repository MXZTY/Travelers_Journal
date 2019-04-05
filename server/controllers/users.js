const JWT = require('jsonwebtoken');
const User = require('../models/userSchema.js');
const { JWT_SECRET } = require('../configuration/index.js');

signToken = user => {
    // only need to focus on the payload header and signature will be automatic.... i think...
    return JWT.sign({
        iss: 'WetToast',
        sub: user._id,
        iat: new Date().getTime(), 
        exp: new Date().getTime(new Date().getTime() + 30)
    }, JWT_SECRET);
}


module.exports = {
    signUp: async (req, res, next) => {
        console.log('UsersController.signUp() called!');
        
        const {email, password} = req.value.body;

        //check if this user already exists in the system
        const foundUser = await User.fineOne({ "local.email": email });
        if(foundUser){
            return res.status(403).json({error: "email is already in use!"})
        }

        //Create the new user
        const newUser = new User({ 
            method: 'local', 
            local: {
                email: email, 
                password: password 
            }
        });

        await newUser.save();

        //Generate Token
        const token = signToken(newUser);
        
        // respond with token
        res.status(200).json({ token });

    }, 

    signIn: async (req, res, next) => {
        //Generate token
        console.log('req.user', req.user);
        const token = signToken(req.user);
        res.status(200).json({ token });
    },

    googleOAuth: async (req, res, next) => {
        // generate token
        const token = signToken(req.user);
        res.status(200).json({ token });
    },


    secret: async(req, res, next) => {
        res.json({secret: "resource"});
    }

}