const User = require("../models/User");

const getAllUsers = (req, res) => {
  User.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => console.log(err));
};

const getUserById = (req, res) => {
  User.findById(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => console.log(err));
};
const updateUserById = (req, res) => {
  res.json({
    success: true,
  });
};
const deleteUserById = (req, res) => {
  User.findById(req.params.id)
    .then((data) => {
      if (data != null) {
        data
          .remove()
          .then(() => console.log("User is deleted..."))
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => console.log(err));
};

const saveUser = (req, res) => {
  let User1 = new User({
    name: req.body.name,
    email: req.body.email,
    job: req.body.job,
  });
  User1.save()
    .then(() => console.log("User is saved..."))
    .catch((err) => console.log(err));
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  saveUser,
};
