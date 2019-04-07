const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../handlers/passport');

const usersController = require('../controllers/users');
const { validateBody, schemas } = require('../handlers/routeHelpers.js');
const passportSignin = passport.authenticate('local', {session: false});
const passportJWT = passport.authenticate('jwt', {session: false});
const passportGoogle = passport.authenticate('googleToken', {session: false});

router.route('/signup')
    // validate body allows for an early exit if schema is not matched. 
    .post(validateBody(schemas.authSchema), usersController.signUp);

router.route('/signin')
    .post(validateBody(schemas.loginSchema), passportSignin, usersController.signIn);

router.route('/oauth/google')
    .post(passportGoogle, usersController.googleOAuth);

router.route('/secret')
    .get(passportJWT, usersController.secret);


module.exports = router;