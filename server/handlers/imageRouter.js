const handleAllImages = (app, Image) => {
    app.route('/api/images')
        .get((req, resp) => {
            resp.setHeader('Access-Control-Allow-Origin', '*');
            resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
            resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
            resp.setHeader('Access-Control-Allow-Credentials', true); // If needed


            Image.find({}, (err, data) => {
                if (data === null) {
                    console.log("hello");
                }
                if (err) {
                    resp.json({
                        message: "unable to connect to Images"
                    });
                } else {

                    resp.json(data);
                }
            })
        });
};

const handleSingleImage = (app, Image) => {
    app.route('/api/image/:id')
        .get((req, resp) => {
            Image.find({
                id: req.params.id
            }, (err, data) => {
                if (err) {
                    resp.json({
                        message: 'Image not found!'
                    });
                } else {
                    resp.json(data);
                }
            });
        });
    app.route('/api/image/:id')
        .post((req, resp) => {
          const uuidv1 = require('uuid/v1');
          const newId = uuidv1();
        console.log(newId);
            let newImage = new Image({
                id: newId ,
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
                filename: req.body.file
            });
             newImage.save(function (err, image){
             if(err) return console.error(err);
             console.log(image.title + " added to db");
             });
           // resp.redirect("localhost:3001/api/upload");
        });
};

const handlesUpload = (app, Image) => {
    const multer = require('multer');
    const fs = require('fs');
    const upload = multer({
        dest: __dirname + '../uploads/images'
    });
    const imgUpload = require('../fileupload/upload.js');
    const type = upload.single('photo');

    app.post('/api/upload', type, (req, res) => {
        if (req.file) {
            let tempPath = req.file.path;
            let targetPath = 'uploads/images/' + req.file.originalname;
            let src = fs.createReadStream(tempPath);
            let dest = fs.createWriteStream(targetPath);
            src.pipe(dest);
            src.on('end', function () {
                let imgURL = imgUpload.uploadPhotoToStorage(targetPath, req.file.originalname);
                res.json(imgURL);
            });
            src.on('error', function (err) {
                res.json('error');
            });
        } else {
            throw 'error';
        }
        
        //resp.redirect("localhost:3000/browse");
    });
};


module.exports = {
    handleAllImages,
    handleSingleImage,
    handlesUpload

}
