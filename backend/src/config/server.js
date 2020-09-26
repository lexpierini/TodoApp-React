// Express related settings, start the server, allocate a port to Express.
// From it we publish the WebServices.

const port = 3003;

const bodyParser = require("body-parser");
const express = require("express");
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.listen(port, function () {
    console.log(`BACKEND is running on port ${port}`)
});

module.exports = server;