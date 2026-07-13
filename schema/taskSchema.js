const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status : {
        type: String,
        enum: ["pending", "inProgress", "completed"],
        required: true
    },
    dueDate: {
        type: Date
    },
    priority: {
        type: String,
        enum: ["high", "medium", "low"]
    }
}, {timestamps: true});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;