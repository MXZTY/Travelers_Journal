const express = require('express');
const parser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const multer = require ('multer');
const upload = multer({dest:__dirname + '/uploads/images'});
const fs = require('fs');
mongoose.Promise = global.Promise;
require('./handlers/dataConnector.js').connect();


const app = express();

//get the data model:
const Image = require('./models/imageSchema.js');

/* --- Middleware --- */
app.use(cors());

app.use(parser.json());

app.use('/users', require('./routes/usersRoutes'));
app.use('/api',require('./routes/imagesRoute'));
const passport = require('./handlers/passport.js');




const type = upload.single('photo');
app.post('/upload', type, (req, res) => {
	if(req.file){
		let tempPath = req.file.path;
		let targetPath = 'uploads/' + req.file.originalname;
		let src = fs.createReadStream(tempPath);
		let dest = fs.createWriteStream(targetPath);
		src.pipe(dest);
		src.on('end', function(){res.json('complete');});
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