var http = require("http");
var fs = require('fs');
const host ="localhost";
const PORT=8080; 

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    var read=fs.createReadStream(__dirname+'/index.html','utf8')
    read.pipe(res);
    
};


const server = http.createServer(requestListener);
server.listen(PORT, host, () => {
    console.log(`Server is running on http://${host}:${PORT}`);
});