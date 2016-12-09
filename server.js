var http = require('http');

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   
   //var pid2 = process.pid;
   var process = require('process'); 
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   if(request.method=='POST') {
       // Send the response body as "Hello Cloud"
        response.end('Wow, this was an awesome POST request!\n'); 
   }
   else
   {
        // Send the response body as "Hello Cloud"
        response.end('Process ID: '+process); 
   } 
}).listen(process.env.PORT);
