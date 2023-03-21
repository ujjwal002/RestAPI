const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "email already exist"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("incorrect email please correct it");
      }
    },
  },
  phone: {
    type: Number,
    min: 10,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
});

// we will create new colection using model

const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;
