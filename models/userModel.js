const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required  "],
    trim: true,
    maxlength: [20, "name must be less then 20 characters long"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
});

module.exports = mongoose.model("User", userSchema);
