const User = require("../Models/User");
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (users.length == 0) {
      res.status(401).json({ msg: "your database is empty " });
    } else {
      res.status(200).json({ users });
    }
  } catch (error) {
    res.status(400).json({ msg: "somthing is wrong" });
  }
};
const getOneUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    res.status(200).json({ user: user });
  } catch (error) {
    res.status(400).json({ msg: "operation failed" });
  }
};
const addUser = async (req, res) => {
  const user = req.body;

  try {
    const userFound = await User.findOne({ email: user.email });
    if (userFound) {
      res.status(401).json({ msg: "user already exist" });
    } else {
      const newUser = new User({
        userName: user.userName,
        email: user.email,
        age: user.age,
      });
      await newUser.save();
      res
        .status(200)
        .json({ msg: "user is sucessfylly saved ", user: newUser });
    }
  } catch (error) {
    res.status(200).json({ msg: "saving failed " });
  }
};
const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    const users = await User.find();
    res.status(200).json({ msg: "user is sucessfylly delted ", users });
  } catch (error) {
    res.status(400).json({ msg: "delete is failed" });
  }
};
const updateUser = async (req, res) => {
  const id = req.params.id;
  const user = req.body;
  try {
    await User.findByIdAndUpdate(id, user);
    res.status(200).json({ msg: "user is sucessfylly updated " });
  } catch (error) {
    res.status(400).json({ msg: "update is failed" });
  }
};

module.exports = { getAllUsers, getOneUser, addUser, deleteUser, updateUser };
