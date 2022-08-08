const express = require("express");
const router = express.Router();
const {
  getTodos,
  setTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/TodoController");
router.get("/", getTodos);

router.post("/", setTodo);

router.put("/:id", updateTodo);

router.delete("/", deleteTodo);

module.exports = router;
