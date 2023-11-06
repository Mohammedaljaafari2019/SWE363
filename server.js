var http = require("http");
var fs = require('fs');
const host ="localhost";
const PORT=9999; 

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/index");
    res.writeHead(200);
    res.end("My first server!");
};


const server = http.createServer(requestListener);
server.listen(PORT, host, () => {
    console.log(`Server is running on http://${host}:${PORT}`);
});