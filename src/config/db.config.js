import mongoose from "mongoose";

// connect database function

export const connectDatabase = () => {
  mongoose
    .connect("mongodb://localhost:27017/team_14")
    .then(() => {
      console.log("database connected");
    })
    .catch((error) => {
      console.log("------database connection error ------");
      console.log(error);
    });
};
