import http from "http";
import express from "express";
const app = express();

//* creating http server
const server = http.createServer(app);

// ip -> 198.168.1.1

//* home -> get, / => <h1>home page</h1>
// app.get(path, handler)
app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");
});

//! CRUD users
//* get all user
//? get /user ->user page
app.get("/users", (req, res) => {
//   res.send("<h1>User page</h1>");
res.json({
    message: "user fetched",
    success: true,
    data : [{
        _id :1,
        name : "john doe",
        email: "john@gmail.com"
    }]
})
});

// create
app.post("/users", (req, res) => {
//   res.send("<h1>User created</h1>");
res.json({
    message: "user created",
    success: true,
    data : {
        _id :1,
        name : "john doe",
        email: "john@gmail.com"
    }
})
});

// update
app.put("/users", (req, res) => {
//   res.send("<h1>User updated</h1>");
res.json({
    message: "user updated",
    success: true,
    data : {
        _id :1,
        name : "john doe",
        email: "john@gmail.com"
    }
})
});

// delete
app.delete("/users", (req, res) => {
//   res.send("<h1>User deleted</h1>");
res.json({
    message: "user deleted",
    success: true,
    data : {
        _id :1,
        name : "john doe",
        email: "john@gmail.com"
    }
})
});

//! CRUD product
//* get all product
//? get /products ->product page
app.get("/products", (req, res) => {
//   res.send("<h1>Product page</h1>");
res.json({
    message: "all products fetched",
    success: true,
    data : [{
        _id :1,
        name : "product1",
        brand : "brand1"
    }]
})
});

// create
app.post("/products", (req, res) => {
//   res.send("<h1>Product created</h1>");
res.json({
    message: "product created",
    success: true,
    data : {
        _id :1,
        name : "product1",
        brand : "brand"
    }
})
});

// update
app.put("/products", (req, res) => {
//   res.send("<h1>Product updated</h1>");
res.json({
    message: "product updated",
    success: true,
    data : {
        _id :1,
        name : "product1",
        brand : "brand"
    }
})
});

// delete
app.delete("/products", (req, res) => {
//   res.send("<h1>Product deleted</h1>");
res.json({
    message: "product deleted",
    success: true,
    data : {
        _id :1,
        name : "product1",
        brand : "brand"
    }
})
});

//* get by id
app.get("/users/:id", (req, res) => {
//   res.send("<h1>User page</h1>");
// req.params => {} => {id :1}
// console.log(req.params)

const id = req.params.id
res.json({
    message: `user by id ${id} fetched`,
    success: true,
    data : [{
        _id :id,
        name : "john doe",
        email: "john@gmail.com"
    }]
})
});


server.listen(8080, "localhost", () => {
  console.log(`server is running at http://localhost:8080`);
  console.log("press ctrl+c to close the server");
});

//? expressJs /nestjs->
// get/ users -> handler
// post/ users -> handler
