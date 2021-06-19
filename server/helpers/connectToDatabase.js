const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect("mongodb://localhost:27017/userApp", {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Connection is Succesfull");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDatabase;
