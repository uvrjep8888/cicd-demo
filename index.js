// index.js
const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Welcome to the cicd tutorials .... \n");
});

server.listen(port, () => {
  // This console.log runs once when the server starts
  console.log(`Server running at http://localhost:${port}/`);
});
