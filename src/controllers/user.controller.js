import mongoose from "mongoose";

// const users = [];

//! user schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

// creating user model
const User = mongoose.model("users", userSchema);

export const getAll = async (req, res, next) => {
  try {
    //   res.send("<h1>User page</h1>");
    const query = req.query;
    console.log(query);
    // console.log(req.url)
    // console.log(req.originalUrl)

    //* database find all query
    const users = await User.find({});
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
  } catch (error) {
    next(error);
  }
};

export const getById = async (req, res, next) => {
  try {
    const { id } = req.params; // becasue req.params give object
    // const user = users.find((users) => users._id === Number(id));

    const user = await User.findOne({ _id: id });

    if (!user) {
      // res.status(404).json({
      //   message: "user not foound",
      //   sucess: false,
      //   data: null,
      // });

      next({
        message: "user not found",
        statuscode: 404,
      });
      return;
    }

    res.status(200).json({
      message: `user fetched by id ${id}`,
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const create = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name) {
      return next({
        message: "name required",
        statuscode: 400,
      });  
    }
    if (!email) {
      return next({
        message: "email required",
        statuscode: 400,
      }); 
    }
    if (!password) {
      return next({
        message: "password required",
        statuscode: 400,
      });
    }
      
    const new_user = await User.create({ name, email, password });
    // users.push({
    //   name,
    //   email,
    //   password,
    //   createdAt: new Date(Date.now()),
    //   _id: users.length + 1,
    // });

    // res.status(201).json({
    //   message: "user created",
    //   success: true,
    //   data: users[users.length - 1],
    // });

    res.status(201).json({
      message: "user created",
      success: true,
      data: new_user,
    });
  } catch (error) {
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    //   res.send("<h1>User updated</h1>");
    const { id } = req.params;
    // const index = users.findIndex((user) => user._id === Number(id));
    const { name, email, password } = req.body;

    if (!name) {
      return next({
        message: "name required",
        statuscode: 400,
      });
    }
    if (!email) {
      return next({
        message: "email required",
        statuscode: 400,
      });
    }
    if (!password) {
      return next({
        message: "password required",
        statuscode: 400,
      });
    }
    const updated_user = await User.findByIdAndUpdate(
      { _id: id },
      { name, email, password },
      { new: true },
    );

    if (!updated_user) {
      // res.status(404).json({
      //   message: "user not found",
      //   sucess: false,
      //   data: null,
      // });
      return next({
        message: "user not found",
        statuscode: 404,
      });
    }
    res.status(200).json({
      message: `user updated by id ${id}`,
      success: true,
      data: updated_user,
    });
  } catch (error) {
    next(error);
  }
};

export const remove = async (req, res, next) => {
  try {
    //   res.send("<h1>User deleted</h1>");
    const { id } = req.params;

    // const index = users.findIndex((user) => user._id === Number(id));

    const deleted_user = await User.findByIdAndDelete(id)
    if (!deleted_user) {
      // res.status(404).json({
      //   message: "user not found",
      //   sucess: false,
      //   data: null,
      // });
      return next({
        message: "user not found",
        statuscode: 404,
      });
    }
    // users.splice(index, 1);
    res.status(200).json({
      message: `user deleted by id ${id}`,
      success: true,
      data: deleted_user,
    });
  } catch (error) {
    next(error);
  }
};
