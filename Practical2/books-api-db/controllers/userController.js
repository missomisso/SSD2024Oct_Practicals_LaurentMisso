const { user } = require("../dbConfig");
const User = require("../models/users");

const createUser = async (req, res) => {
  const newUser = req.body;
  try {
    const createdUser = await User.createUser(newUser);
    res.status(201).json(createdUser);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating user");
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await user.getAllUsers();
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving user");
  }
};

const getUserById = async (req, res) => {
  const UserId = parseInt(req.params.id);
  try {
    const user = await User.getUserById(bookId);
    if (!user) {
      return res.status(404).send("Book not found");
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving book");
  }
};

const updateUser = async (req, res) => {
  const UserId = parseInt(req.params.id);
  const newUserData = req.body;

  try {
    const updatedUser = await Book.updateUser(UserId, newUserData);
    if (!updatedUser) {
      return res.status(404).send("Book not found");
    }
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating book");
  }
};

const deleteUser = async (req, res) => {
  const UserId = parseInt(req.params.id);

  try {
    const success = await User.deleteBook(UserId);
    if (!success) {
      return res.status(404).send("User not found");
    }
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send("User deleting book");
  }
  async function searchUsers(req, res) {
    const searchTerm = req.query.searchTerm; // Extract search term from query params
  
    try {
      const users = await User.searchUsers(searchTerm);
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error searching users" });
    }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
