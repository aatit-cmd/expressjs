const users = [];

export const getAll=(req, res) => {
  //   res.send("<h1>User page</h1>");
  const query = req.query;
  console.log(query);
  // console.log(req.url)
  // console.log(req.originalUrl)
  res.status(200).json({
    message: "user fetched",
    success: true,
    // data : [{
    //     _id :1,
    //     name : "john doe",
    //     email: "john@gmail.com"
    // }]
    data: users,
  });
}

export const getById =  (req, res) => {
  const { id } = req.params; // becasue req.params give object
  const user = users.find((users) => users._id === Number(id));

  if (!user) {
    res.status(404).json({
      message: "user not foound",
      sucess: false,
      data: null,
    });
    return;
  }
  res.status(200).json({
    message: `user fetched by id ${id}`,
    success: true,
    data: user,
  });
}

export const create = (req, res) => {
  //   res.send("<h1>User created</h1>");
  // console.log(req.body)
  const { name, email, password } = req.body;
  users.push({
    name,
    email,
    password,
    createdAt: new Date(Date.now()),
    _id: users.length + 1,
  });
  res.status(201).json({
    message: "user created",
    success: true,
    data: users[users.length - 1],
  });
}

export const update= (req, res) => {
  //   res.send("<h1>User updated</h1>");
  const { id } = req.params;
  const index = users.findIndex((user) => user._id === Number(id));

  const { name, email, password } = req.body;

  if (index === -1) {
    res.status(404).json({
      message: "user not found",
      sucess: false,
      data: null,
    });
    return;
  }
  res.status(200).json({
    message: `user updated by id ${id}`,
    success: true,
    data: {
      ...users[index],
      name,
      email,
      password,
    },
  });
}

export const remove = (req, res) => {
  //   res.send("<h1>User deleted</h1>");
  const { id } = req.params;

  const index = users.findIndex((user) => user._id === Number(id));
  if (index === -1) {
    res.status(404).json({
      message: "user not found",
      sucess: false,
      data: null,
    });
    return;
  }
  users.splice(index, 1);
  res.status(200).json({
    message: `user deleted by id ${id}`,
    success: true,
    data: null,
  });
}