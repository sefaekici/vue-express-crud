const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true],
  },
  email: {
    type: String,
    required: [true],
  },
  job: {
    type: String,
    required: [true],
  },
  signDate: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
