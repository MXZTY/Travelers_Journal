const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../handlers/passport');

const imageController = require('../controllers/images');
const { validateBody, schemas } = require('../handlers/routeHelpers.js');

const passportSignin = passport.authenticate('local', { session: false });
const passportJWT = passport.authenticate('jwt', { session: false });
const passportGoogle = passport.authenticate('googleToken', { session: false });


router.route('/images')
    .get(imageController.handleAllImages)

router.route('/images/:id')
    .get(imageController.handleSingleImage)


router.route('/images/city/:city')
    .get(imageController.handleImagesFromSingleCity)


router.route('/images/country/:country')
    .get(imageController.handleImagesFromSingleCountry)


module.exports = router;