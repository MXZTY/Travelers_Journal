
// https://www.youtube.com/playlist?list=PLVBXNyNyLNq0jyDcfjOc9psQYK_leG52r
const Images = require('../models/imageSchema.js');



module.exports = {

    handleAllImages: async (req, resp, next) => {
        Images.find({}, (err, data) => {
            if (err) {
                resp.json({ message: "unable to connect to Images" });
            } else {
                resp.json(data);
            }
        });

    },


    handleSingleImage: async (req, resp, next) => {
        // console.log("Looking for Id: ", req.params.id);
        Images.find({ id: req.params.id }, (err, data) => {
            if (err) {
                resp.json({ message: 'Image not found!' });
            } else {
                resp.json(data);
            }
        });

    },

    handleImagesFromSingleCity: async (req, resp, next) => {
        // console.log("Looking for City: ", req.params.city);
        Images.find({ 'location.city': new RegExp(req.params.city, 'i') }, (err, data) => {
            if (err) {
                resp.json({ message: 'images from city where not found' });
            } else {
                resp.json(data);
            }
        });

    },

    handleImagesFromSingleCountry: async (req, resp, next) => {
        // console.log("Looking for Country: ", req.params.country);
        Images.find({ 'location.country': new RegExp(req.params.country, 'i') }, (err, data) => {
            if (err) {
                resp.json({ message: 'images from country where not found' });
            } else {
                resp.json(data);
            }
        });
    },

    insertImage: async (req, resp, next) => {
        const uuidv1 = require('uuid/v1');
        const newId = uuidv1();
        // console.log(newId);
        // console.log("Found body : ", req.body);
        //   console.log(req.file);
        let newImage = new Images({
            id: newId,
            title: req.body.title,
            description: req.body.description,
            location: {
                iso: req.body.iso,
                country: req.body.country,
                city: req.body.city,
                cityCode: req.body.cityCode,
                continent: req.body.continent,
                latitude: req.body.latitude,
                longitude: req.body.longitude
            },
            user: {
                userid: 401,
                picture: {
                    large: req.body.large,
                    thumbnail: req.body.thumbnail
                },
                firstname: req.body.firstname,
                lastname: req.body.lastname
            },
            exif: {
                make: req.body.make,
                model: req.body.model,
                exposure_time: req.body.expTime,
                aperture: req.body.aperture,
                focal_length: req.body.focal,
                iso: req.body.exifISO

            },
            filename: req.body.filename
        });

        newImage.save(function (err, image) {
            if (err) {
                return console.error(err);
            }
            else {
                resp.send(image);
                // console.log(image.title + " added to db");
            }
        });
    },
    updateImage: async (req, resp, next) => {
        let idtoUpdate = req.params.id;
        Images.findOne({ id: idtoUpdate }, (err, foundObject) => {
            if (err) {
                console.log(err);
            }
            else {
                if (!foundObject) {
                    resp.status(404).send();
                }
                else {

                    foundObject.title = req.body.title,
                        foundObject.description = req.body.description,
                        foundObject.location.iso = req.body.iso,
                        foundObject.location.country = req.body.country,
                        foundObject.location.city = req.body.city,
                        foundObject.location.cityCode = req.body.cityCode,
                        foundObject.location.continent = req.body.continent,
                        foundObject.location.latitude = req.body.latitude,
                        foundObject.location.longitude = req.body.longitude,
                        foundObject.user.picturelarge = req.body.large,
                        foundObject.user.picture.thumbnail = req.body.thumbnail,
                        foundObject.user.firstname = req.body.firstname,
                        foundObject.user.lastname = req.body.lastname,
                        foundObject.exif.make = req.body.make,
                        foundObject.exif.model = req.body.model,
                        foundObject.exif.exposure_time = req.body.exposure_time,
                        foundObject.exif.aperture = req.body.aperture,
                        foundObject.exif.focal_length = req.body.focal_length,
                        foundObject.filename = req.body.filename


                    foundObject.save(function (err, updatedObject) {
                        if (err) {
                            return console.error(err);
                        }
                        else {
                            resp.send(updatedObject);
                            // console.log(updatedObject.title + " updated to db");
                        }
                    });
                }
            }
        });


    
    },
    deleteImage: async (req, resp, next) => {
        // console.log("Looking for Id: ", req.params.id);
        Images.findOneAndDelete({ id: req.params.id }, (err) => {
            if (err) {
               return resp.status(500).send();
            } else {
                return resp.status(200).send();
            }
        });

    }





}