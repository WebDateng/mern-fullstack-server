import User from "../models/UserModel.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findOne({ name: req.params.name });
    res.json(user);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const saveUser = async (req, res) => {
  const data = new User(req.body);

  try {
    const saveData = await data.save();
    res.status(201).json(saveData);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const updateduser = await User.updateOne({ _id: req.params.id }, { $set: req.body });
    res.status(200).json(updateduser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deleteduser = await User.deleteOne({ _id: req.params.id });
    res.status(200).json(deleteduser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
