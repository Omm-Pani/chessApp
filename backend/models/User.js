const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "first name is required"],
    trim: true,
    text: true,
  },
  last_name: {
    type: String,
    required: [true, "last name is required"],
    trim: true,
    text: true,
  },
  username: {
    type: String,
    required: [true, "username is required"],
    trim: true,
    text: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
});

module.exports = mongoose.model("User", userSchema);
