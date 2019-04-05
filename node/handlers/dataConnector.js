// const http = require('http');
// // Configure HTTP server to respond with simple message to all requests
// const server = http.createServer(function (request, response) {
//     response.writeHead(200, { "Content-Type": "text/plain" });
//     response.write("Hello, i'm a node.js file that runs!\n");
//     response.end();
// });
// // Listen on port on localhost
// const port = 3001;
// server.listen(port);
// // display a message on the terminal
// console.log("Server running at port=" + port);

require('dotenv').config();
console.log(process.env.MONGO_URL);

const mongoose = require('mongoose');

const connect = () => {
    mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', function callback(){
        console.log("Now connected to Mongo!");
    });
}

module.exports = {
    connect
};