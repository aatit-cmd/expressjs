import http from "http";
import express from "express";
const app = express();

//* creating http server
const server = http.createServer(app)

// ip -> 198.168.1.1

//* home -> get, / => <h1>home page</h1>
// app.get(path, handler)
app.get('/', (req, res) => {
    res.send("<h1>Home page</h1>")
})

//* get all user
//? get /users ->user page
app.get('/user', (req, res) => {
    res.send("<h1>User page</h1>")
})

server.listen(8080, "localhost", () => {
  console.log(`server is running at http://localhost:8080`);
  console.log("press ctrl+c to close the server");
});

//? expressJs /nestjs->
// get/ users -> handler
// post/ users -> handler