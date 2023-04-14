import Task from "../models/taskModel.js";
import User from "../models/userModel.js";

// add new task

export const addTask = async (req, res) => {
  const newTask = new Task(req.body);
  try {
    const savedTask = await newTask.save();
    res.status(200).json(savedTask);
  } catch (err) {
    res.status(500).json(err);
  }
};

// update task by  objectid - userId

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (task.userId === req.body.userId) {
      await task.updateOne({ $set: req.body });
      res.status(200).json("the task has been updated");
    } else {
      res.status(403).json("you can only update your task");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// delete task

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (task.userId === req.body.userId) {
      await task.deleteOne();
      res.status(200).json("task has been deleted");
    } else {
      res.status(403).json("u can delete only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// get your tasks

export const userAllTasks = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    const tasks = await Task.find({ userId: user._id });

    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json(err);
  }
};
