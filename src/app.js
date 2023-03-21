const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("./deb/conn");
const Student = require("./models/students");
// create a new student
app.use(express.json());
app.post("/students", (req, res) => {
  console.log(req.body);
  const user = new Student(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});
