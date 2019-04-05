const express = require('express');
const parser = require('body-parser');
const mongoose = require('mongoose');

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

let port = 3001;
app.listen(port, function(){
    console.log("server is running at port = " + port);
});

// module.exports = app;