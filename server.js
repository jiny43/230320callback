import http from 'http';
import { f } from './file.js';
console.log(http);
const server = http.createServer(function(requset,response){
  
  let body = "";
  body += "<!DOCTYPE html>";
  body += "<html>";
  body += "<head>";
  body += "<title>Node.js</title>";
  body += "</head>"
  body += "<body>"
  body += "<h1>hello world</h1>"
  body += "<button>hi</button>"
  body += "</body>"
  body += "</html>"




  response.statusCode = 200;
  response.setHeader('Content-Type','text/html');
  response.end(body);
  });
  server.listen(8080, function(){
    console.log('서버!');
    
});
