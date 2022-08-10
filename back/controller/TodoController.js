const asyncHandler = require("express-async-handler");

const Todo = require("../model/todoModel");
// @desc get Todos
// @route GET / api / todos
// @access Private

const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find({ user: req.useid });
  res.status(200).json(todos);
});

// @desc set Todo
// @route POST / api / todos
// @access Private

const setTodo = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    // res.status(400).json({ message: "please add todo" });
    throw new Error("Please add a text field");
  }
  const todo = await Todo.create({
    user: req.user.id,
    text: req.body.text,
  });
  console.log(req.body);
  res.status(200).json(todo);
});

// @desc update Todo
// @route GET / api / todos

// @access Private

const updateTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(400);
    throw new Error("todo not found");
  }
  const user = await User.findById(req.user.id);
  // check if user exist

  if (!user) {
    res.status(401);
    throw new Error("user not found");
  }
  // only the logged in user matches the todo user
  if (todo.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedTodo);
});

// @desc delete Todo
// @route Delete / api / todos
// @access Private

const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(400);
    throw new Error("todo not found");
  }
  const user = await User.findById(req.user.id);
  // check if user exist

  if (!user) {
    res.status(401);
    throw new Error("user not found");
  }
  // only the logged in user matches the todo user
  if (todo.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }
  await todo.remove();
  res.status(200).json({ id: req.params.id });
});
module.exports = {
  getTodos,
  deleteTodo,
  updateTodo,
  setTodo,
};
