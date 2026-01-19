// index.js
const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  const responseText = `
          Welcone to cicd tutorials.
	  Welcome to my page.
	  Welcome to my Brownbag Session
	` 
  res.end("Welcome to my brownbag session \n");
});

server.listen(port, () => {
  // This console.log runs once when the server starts
  console.log(`Server running at http://localhost:${port}/`);
});
