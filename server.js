// var http = require("http");
// var fs = require('fs');
// const host ="localhost";
// const PORT=8080; 

// const requestListener = function (req, res) {
//     res.setHeader("Content-Type", "text/index");
//     res.writeHead(200);
//     res.end("My first server!");
// };


// const server = http.createServer(requestListener);
// server.listen(PORT, host, () => {
//     console.log(`Server is running on http://${host}:${PORT}`);
// });


const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('./form'))
app.get('/compleform',(req,res)=>{
    res.sendFile(path.join(__dirname, './form/compleform.html'));
})
app.post('/done',(req,res)=>{
    res.sendfile(path.join(__dirname,'thankyou.html'))
})

app.listen(5000,()=>{
    console.log('welcome')
})