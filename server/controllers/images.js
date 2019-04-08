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
        console.log("Looking for Id: ", req.params.id);
        Images.find({ id: req.params.id }, (err, data) => {
            if (err) {
                resp.json({ message: 'Image not found!' });
            } else {
                resp.json(data);
            }
        });

    },

    handleImagesFromSingleCity: async (req, resp, next) => {
        console.log("Looking for City: ", req.params.city);
        Images.find({ 'location.city': new RegExp(req.params.city, 'i') }, (err, data) => {
            if (err) {
                resp.json({ message: 'images from city where not found' });
            } else {
                resp.json(data);
            }
        });

    },

    handleImagesFromSingleCountry: async (req, resp, next) => {
        console.log("Looking for Country: ", req.params.country);
        Images.find({ 'location.country': new RegExp(req.params.country, 'i') }, (err, data) => {
            if (err) {
                resp.json({ message: 'images from country where not found' });
            } else {
                resp.json(data);
            }
        });
    }



}