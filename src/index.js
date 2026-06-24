import http from "http";
import express from "express";
const app = express();

//* creating http server
const server = http.createServer(app)

// ip -> 198.168.1.1

server.listen(8080, "localhost", () => {
  console.log(`server is running at http://localhost:8080`);
  console.log("press ctrl+c to close the server");
});

//? expressJs /nestjs->
// get/ users -> handler
// post/ users -> handler