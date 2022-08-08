// @desc get Todos
// @route GET / api / todos
// @access Private

const getTodos = (req, res) => {
  res.status(200).json("Get Todos");
};

// @desc set Todo
// @route POST / api / todos
// @access Private

const setTodo = (req, res) => {
  res.status(200).json("set Todos");
};

// @desc update Todo
// @route GET / api / todos
// @access Private

const updateTodo = (req, res) => {
  res.status(200).json(`update todo ${req.params.id}`);
};

// @desc delete Todo
// @route Delete / api / todos
// @access Private

const deleteTodo = (req, res) => {
  res.status(200).json(`delete todo ${req.params.id}`);
};
module.exports = {
  getTodos,
  deleteTodo,
  updateTodo,
  setTodo,
};
