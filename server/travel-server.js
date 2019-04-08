const express = require('express');
const parser = require('body-parser');
var cors = require('cors');
const mongoose = require('mongoose');
const fs = require('fs');


mongoose.Promise = global.Promise;
require('./handlers/dataConnector.js').connect();


const app = express();

app.use(cors({origin: 'http://localhost:3001'}));

//get the data model:
const Image = require('./models/imageSchema.js');

/* --- Middleware --- */

app.use(parser.json());
app.use(parser.urlencoded({extended: false}));


app.use('/users', require('./routes/usersRoutes'));

const passport = require('./handlers/passport.js');


const imageRouter = require('./handlers/imageRouter.js');
imageRouter.handleAllImages(app, Image);
imageRouter.handleSingleImage(app, Image);
imageRouter.handlesUpload(app, Image);

 





let port = 3001;
app.listen(port, function(){
    console.log("server is running at port = " + port);
});

// module.exports = app;