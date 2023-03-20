import http from 'http';
import { title } from 'process';
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
  body += "</body>"
  body += "</html>"




  response.statusCode = 200;
  response.setHeader('Content-Type','text/plain');
  response.end('hello world');
});
