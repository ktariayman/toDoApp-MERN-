const express = require("express");
const router = express.Router();
const {
  getTodos,
  setTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/TodoController");

const { protect } = require("../middleware/authMiddleware");
router.get("/", protect, getTodos);

router.post("/", protect, setTodo);

router.put("/:id", protect, updateTodo);

router.delete("/", protect, deleteTodo);

module.exports = router;
