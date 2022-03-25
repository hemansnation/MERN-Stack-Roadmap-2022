// const http = require('http');

// import http from 'http';

import { createServer } from 'http';

const server = createServer((req,res) => {
    res.end("<h1>Hello Node!!</h1>");
});

server.listen(4242, ()=>{
    console.log("Server is running.....");
});