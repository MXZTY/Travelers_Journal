const path = require('path');
const express = require('express');
const router = express.Router();




// handle requests for static resources
router.get('/site/:filename', (req, res) => {
    const options = { root: path.join(__dirname, '../public/') };
    res.sendFile(req.params.filename, options, (err) => {
        if (err) {
            console.log(err);
            res.status(404).send('File Not Found')
        }
        else {
            console.log('Sent:', req.params.filename);
        }
    });
});
module.exports = router;