const {
    createUser,
    getUserById,
    getUsers,
    updateUsers,
    deleteUser,
    login,
    addItems
} = require("./UserController");
const users = require("express").Router();
const { checkToken } = require("../../auth/TokenValidation");

users.post("/", checkToken, createUser);

users.get("/", checkToken, getUsers);

users.get("/:id", checkToken, getUserById);

users.patch("/", checkToken, updateUsers);

users.delete("/:id", checkToken, deleteUser);

users.post("/login", login);

users.post("/additem", addItems);

module.exports = users;
