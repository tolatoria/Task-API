const express = require("express");
const validTask = require("../validation/validTask");
const { createTask, getAllTask, updateTask, deleteTask } = require("../controller/taskController");
const taskRouter = express.Router();

taskRouter.post("/create", validTask, createTask);
taskRouter.get("/get", getAllTask);
taskRouter.put("/update/:id", updateTask);
taskRouter.delete("/delete/:id", deleteTask)

module.exports = taskRouter