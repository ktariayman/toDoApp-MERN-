const asyncHandler = require("express-async-handler");
// @desc get Todos
// @route GET / api / todos
// @access Private

const getTodos = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Todos" });
});

// @desc set Todo
// @route POST / api / todos
// @access Private

const setTodo = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    // res.status(400).json({ message: "please add todo" });
    throw new Error("Please add a text field");
  }
  console.log(req.body);
  res.status(200).json({ message: "set Todos" });
});

// @desc update Todo
// @route GET / api / todos

// @access Private

const updateTodo = asyncHandler(async (req, res) => {
  res.status(200).json({ mesage: `update todo ${req.params.id}` });
});

// @desc delete Todo
// @route Delete / api / todos
// @access Private

const deleteTodo = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete todo ${req.params.id}` });
});
module.exports = {
  getTodos,
  deleteTodo,
  updateTodo,
  setTodo,
};
