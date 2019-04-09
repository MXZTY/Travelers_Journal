
const handleSingleImage = (app, Image) => {
    const multer = require('multer');
    const upload = multer({
        dest: __dirname + '../uploads/images'
    });
    
    app.post('/api/image/:id', upload.single('photo'), (req, resp) => {
        console.log("in the post image data upload block");
        const uuidv1 = require('uuid/v1');
        const newId = uuidv1();
        console.log(newId);
        console.log(req.body);
        console.log(req.file);
        let newImage = new Image({
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
                userid: 400,
                picture: {
                    large: "String",
                    thumbnail: "String"
                },
                firstname: "String",
                lastname: "String"
            },
            exif: {
                make: req.body.make,
                model: req.body.model,
                exposure_time: req.body.expTime,
                aperture: req.body.aperture,
                focal_length: req.body.focal,
                iso: req.body.exifISO

            },
            filename: req.file.originalname
        });

        newImage.save(function (err, image) {
            if (err) return console.error(err);
            console.log(image.title + " added to db");
        });
        const uPhotoHandler = require('./uploadPhotoHandler.js.js');
        uPhotoHandler.uploadPhoto(req.file);
        resp.redirect("localhost:3000/browse");

    });
};
const handlesUpload = (app, Image) => {
    const multer = require('multer');
    const upload = multer({ dest: __dirname + '/uploads/images' });
    const uPhotoHandler = require('./uploadPhotoHandler.js');
    app.post('/api/upload', upload.single('photo'), (req, res) => {
        console.log(req);
        console.log(req.file);
        console.log("in the image upload block");
        uPhotoHandler.uploadPhoto(req.file);

        resp.redirect("localhost:3000/browse");
    });
};


module.exports = {
    handleSingleImage,
    handlesUpload

}
