const uploadPhoto = (file) =>{
	console.log('uploading photo');
	const multer = require('multer');
	const fs = require('fs');
    const upload = multer({
        dest: __dirname + '../uploads/images'
    });
    const imgUpload = require('../fileupload/upload.js');
    const type = upload.single('photo');
	
	if (file) {
            let tempPath = file.path;
            let targetPath = 'uploads/images/' + file.originalname;
            let src = fs.createReadStream(tempPath);
            let dest = fs.createWriteStream(targetPath);
            src.pipe(dest);
            src.on('end', function () {
                //let imgURL = imgUpload.uploadPhotoToStorage(targetPath, file.originalname);
                //res.json(imgURL);
            });
            src.on('error', function (err) {
                res.json('error');
            });
        } else {
            throw 'error';
        }
}

module.exports={uploadPhoto};