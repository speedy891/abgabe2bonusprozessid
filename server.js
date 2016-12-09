var http = require('http');

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   
   //var pid2 = process.pid;
   var process = require('process'); 
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Process ID: '+process.pid); 
  
}).listen(process.env.PORT);
