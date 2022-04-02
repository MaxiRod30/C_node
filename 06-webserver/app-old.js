const http = require('http');

//Creacion de servidor http
const server = http.createServer((req , res)=>{
  res.writeHead(200);
  res.write('Error 404');
  res.end();
}).listen(8080);

console.log('escuchando puerto 8080')