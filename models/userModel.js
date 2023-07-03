// requiring mongoose for connection
const mongoose = require("mongoose");

const user = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    is_verified: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// console.log(userSchema);
const User = mongoose.model("User", user);

module.exports = User;

