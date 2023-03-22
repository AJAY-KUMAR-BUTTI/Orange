const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required : true
  },
  confirmPassword: {
    type: String
  }
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
