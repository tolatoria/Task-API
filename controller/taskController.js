const Task = require("../schema/taskSchema");

const createTask = async (req, res)=>{
    try {
        const {title, description, status, dueDate, priority} = req.body;

        const task = new Task({title, description, status, dueDate, priority})
        if (!task) {
            const error = new Error("no task created yet, proceed to creating a task");
            error.statusCode = 400;
            next(error);
        };

        await task.save();
        res.status(201).json({
            status: "success",
            data: {
                task
            }
        })
    } catch (err) {
        next(err);
    }
};

const getAllTask = async (req, res)=>{
    try {
        const {status, title, sort, select} = req.query;
        const filter = {};

        if (status) {
           filter.status = status 
        };
        if (title) {
            filter.title = {$regex: title, $options: "i"}
        };

        let result = Task.find(filter);
        if (sort) {
            result = result.sort(sort.split(",").join(" "))
        };
        if (select) {
            result = result.select(select.split(",").join(" "))
        }

        const page = req.query.page || 1;
        const limit = req.query.limit || 10;
        const skip = (page - 1) * limit;

        result = result.skip(skip).limit(limit)
        const task = await result;
        res.status(200).json({
            status: "success",
            data: {
                task
            }
        })
    } catch (err){
        next(err);
    }
};

const updateTask = async (req, res)=>{
    try {
        const {title, description, status, dueDate, priority} = req.body;
        const {id} = req.params;

        const task = await Task.findById(id);
        if (!task) {
            const error = new Error("task with the inputted id is not found, proceed to creating one");
            error.statusCode = 404;
            next(error);
        }

        const updatedTask = await Task.findByIdAndUpdate(id, {title, description, status, dueDate, priority}, {new: true, runValidation: true});
        if (!updatedTask) {
            const error = new Error("data not updated, proceed to updating it well");
            error.statusCode = 400;
            next(error);
        }
        res.status(200).json({
            status: "success",
            data: {
                updatedTask
            }
        })
    } catch (err) {
        next(err);
    }
};

const deleteTask = async (req, res)=>{
    try {
        const {id} = req.params;

        const task = await Task.findById(id);
        if (!task) {
            const error = new Error("task with the inputted id is not found, proceed to creating one");
            error.statusCode = 404;
            next(error);
        }
        const deletedTask = await Task.findByIdAndDelete(id);
         if (!deletedTask) {
            const error = new Error("data not deleted, proceed to deleting it well");
            error.statusCode = 400;
            next(error); 
        }
        res.status(200).json({
            status: "success",
            data: {
                deletedTask
            }
        })
    } catch (err) {
        next(err);
    }
}
module.exports = {createTask, getAllTask, updateTask, deleteTask}