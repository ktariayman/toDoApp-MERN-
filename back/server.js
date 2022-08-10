const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddeware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/todos", require("./routes/TodoRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);
app.listen(port, () => console.log(`Server started on port ${port}`));
