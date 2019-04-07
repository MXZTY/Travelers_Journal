const JWT = require('jsonwebtoken');
const user = require('../models/userSchema.js');
const { JWT_SECRET } = require('../configuration/index.js');
const uuidv4 = require('uuid/v4');

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
        
        //!!form data
        const {firstname, lastname, city, country, email, password} = req.value.body;
		console.log(email);
		console.log(password);
        //check if this user already exists in the system
        const foundUser = await user.findOne({ "local.email": email });
        if(foundUser){
            return res.status(403).json({error: "email is already in use!"})
        }

        //Create the new user //!!!
        const newUser = new user({ 
            method: 'local',  
            local: {
                "id":uuidv4(),
                "details.firstname":firstname,
                "details.lastname":lastname,
                "details.city":city,
                "details.country":country,
                "email":email,
                "password_bcrypt":password,
                "apikey":uuidv4()
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

/* CURRENT

"method" : "local",
	"local" : {
		"id" : "04e367a6-5ad1-423c-b865-f3b9de02937d",
		"firstname" : "q",
		"lastname" : "w",
		"city" : "e",
		"country" : "r",
		"email" : "qwerty@12345.com",
		"password" : "$2b$10$tci7PkEINLtcZEO2iKyiEOiW3oe0Vt8.lSwQJsPPXsCQbpQklksiy",
		"apikey" : "2a49ce9b-c093-4655-a915-fa5de2d0c1c0"
	},
    "__v" : 0

*/

/* DESIRED
"id" : 3,
	"details" : {
		"firstname" : "Zarla",
		"lastname" : "Pochet",
		"city" : "Chicago",
		"country" : "United States"
	},
	"email" : "zpochet2@apple.com",
	"password_bcrypt" : "$2a$12$oWzc1WbCuMOpQuoon4moGeXS1uJRoOe5xZ9WlsU/Ic2bUYp8ivnYq",
    "apikey" : "11706403fd1547cbb9c51eae79eeaf2e"
*/