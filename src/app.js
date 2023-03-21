const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("./deb/conn");
// create a new student
app.post("/student", (res, req) => {
  res.send("hello from other side");
});

app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});
