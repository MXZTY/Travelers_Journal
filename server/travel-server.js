const express = require('express');
const parser = require('body-parser');
const mongoose = require('mongoose');
const multer = require ('multer');
const upload = multer({dest:__dirname + '/uploads/images'});
const fs = require('fs');
const imgUpload = require('./fileupload/upload.js');
mongoose.Promise = global.Promise;
require('./handlers/dataConnector.js').connect();


const app = express();

//get the data model:
const Image = require('./models/imageSchema.js');

/* --- Middleware --- */

app.use(parser.json());

app.use('/users', require('./routes/usersRoutes'));

const passport = require('./handlers/passport.js');


const imageRouter = require('./handlers/imageRouter.js');
imageRouter.handleAllImages(app, Image);
imageRouter.handleSingleImage(app, Image);
imageRouter.handleImagesFromSingleCity(app, Image);
imageRouter.handleImagesFromSingleCountry(app, Image);
imageRouter.handlePageIndex(app, Image);
imageRouter.handleCountryList(app, Image);
imageRouter.showImagesFromSingleCountry(app, Image);
imageRouter.showSingleImage(app, Image);
imageRouter.handleAbout(app, Image);


const type = upload.single('photo');
app.post('/upload', type, (req, res) => {
	if(req.file){
		let tempPath = req.file.path;
		let targetPath = 'uploads/' + req.file.originalname;
		let src = fs.createReadStream(tempPath);
		let dest = fs.createWriteStream(targetPath);
		src.pipe(dest);
		src.on('end', function(){
			let imgURL=imgUpload.uploadPhotoToStorage(targetPath, req.file.originalname);
			res.json(imgURL);
			});
		src.on('error', function(err){res.json('error');});
	}else{
		throw 'error';
	}
});

let port = 3001;
app.listen(port, function(){
    console.log("server is running at port = " + port);
});

// module.exports = app;