const mongoose = require("mongoose");

const connection = async () => {
  const res = await mongoose.connect("mongodb://localhost:27017/students-api");
  console.log("connection successfull");
};
connection();
