const http = require('http');
// Configure HTTP server to respond with simple message to all requests
const server = http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain", "Access-Control-Allow-Origin": "*" });
    response.write("Hello, i'm a node.js file that runs!\n");
    response.end();
});
// Listen on port on localhost
const port = 3001;
server.listen(port);
// display a message on the terminal
console.log("Server running at port=" + port);

require('./fileupload/upload.js');