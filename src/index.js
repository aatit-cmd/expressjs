import http from "http";
import express from "express";
const app = express();

//* creating http server
const server = http.createServer(app);

app.use(express.json());
const users = [];
// ip -> 198.168.1.1
const products = [];

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
  const query = req.query;
  console.log(query);
  // console.log(req.url)
  // console.log(req.originalUrl)
  res.json({
    message: "user fetched",
    success: true,
    // data : [{
    //     _id :1,
    //     name : "john doe",
    //     email: "john@gmail.com"
    // }]
    data: users,
  });
});

// create
app.post("/users", (req, res) => {
  //   res.send("<h1>User created</h1>");
  // console.log(req.body)
  const { name, email, password } = req.body;
  users.push({
    name,
    email,
    password,
    createdAt: Date.now(),
    _id: users.length + 1,
  });
  res.json({
    message: "user created",
    success: true,
    data: users[users.length - 1],
  });
});

// get by id
app.get("/users/:id", (req, res) => {
  const { id } = req.params; // becasue req.params give object
  const user = users.find((users) => users._id === Number(id));

  if (!user) {
    res.json({
      message: "user not foound",
      sucess: false,
      data: null,
    });
    return;
  }
  res.json({
    message: `user fetched by id ${id}`,
    success: true,
    data: user,
  });
});

// update
app.put("/users/:id", (req, res) => {
  //   res.send("<h1>User updated</h1>");
  const { id } = req.params;
  const index = users.findIndex((user) => user._id === Number(id));

  const { name, email, password } = req.body;

  if (index === -1) {
    res.json({
      message: "user not found",
      sucess: false,
      data: null,
    });
    return;
  }
  res.json({
    message: `user updated by id ${id}`,
    success: true,
    data: {
      ...users[index],
      name,
      email,
      password,
    },
  });
});

// delete
app.delete("/users/:id", (req, res) => {
  //   res.send("<h1>User deleted</h1>");
  const {id} = req.params;

  const index = users.findIndex((user)=>user._id===Number(id));
  if (index === -1) {
    res.json({
      message: "user not found",
      sucess: false,
      data: null,
    });
    return;
  }
  users.splice(index,1);
  res.json({
    message: `user deleted by id ${id}`,
    success: true,
    data: null
  });
});

//! CRUD product
//* get all product
//? get /products ->product page
app.get("/products", (req, res) => {
  //   res.send("<h1>Product page</h1>");
  res.json({
    message: "all products fetched",
    success: true,
    data: products,
  });
});

//* get  product by id
app.get("/products/:id", (req, res) => {
  // const id = req.params.id
  const { id } = req.params; // as req.prarams give object
  const product = products.find((product) => product._id === Number(id));

  if (!product) {
    res.json({
      message: "product not foound",
      sucess: false,
      data: null,
    });
    return;
  }

  res.json({
    message: `product by id ${id} fetched`,
    success: true,
    data: product,
  });
});

// create
app.post("/products", (req, res) => {
  //   res.send("<h1>Product created</h1>");
  const { name, price, brand } = req.body;
  products.push({
    name,
    price,
    brand,
    createdAt: Date.now(),
    _id: products.length + 1,
  });
  res.json({
    message: "product created",
    success: true,
    data: products[products.length - 1],
  });
});

// update
app.put("/products/:id", (req, res) => {
  //   res.send("<h1>Product updated</h1>");
  const { id } = req.params;
  const index = products.findIndex((products) => products._id === Number(id));

  const { name, price, brand } = req.body;

  if (index === -1) {
    res.json({
      message: "product not found",
      sucess: false,
      data: null,
    });
    return;
  }
  res.json({
    message: `product updated by id ${id}`,
    success: true,
    data: {
      ...products[index],
      name,
      price,
      brand,
    },
  });
});

// delete
app.delete("/products/:id", (req, res) => {
  //   res.send("<h1>Product deleted</h1>");
  const id = req.params.id;
  res.json({
    message: "`product by id ${id} deleted`",
    success: true,
    data: {
      _id: id,
      name: "product1",
      brand: "brand",
    },
  });
});

//* get users by id
app.get("/users/:id", (req, res) => {
  //   res.send("<h1>User page</h1>");
  // req.params => {} => {id :1}
  // console.log(req.params)

  const id = req.params.id;
  res.json({
    message: `user by id ${id} fetched`,
    success: true,
    data: [
      {
        _id: id,
        name: "john doe",
        email: "john@gmail.com",
      },
    ],
  });
});

server.listen(8080, "localhost", () => {
  console.log(`server is running at http://localhost:8080`);
  console.log("press ctrl+c to close the server");
});

//? expressJs /nestjs->
// get/ users -> handler
// post/ users -> handler

// http://localhost:8080/users?name=john&page=1&limit=10

// req.params -> {}
// req.query -> {name:"john",page:"1",limit:"10"}
// req.body
