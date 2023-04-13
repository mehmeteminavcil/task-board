import Task from "../models/taskModel.js";

export const addTask = (req, res, next) => {
  const task = new Task({
    title: req.body.title,
    description: req.body.description,
    priority: req.body.priority || 1,
    dueDate: req.body.dueDate,
    completed: req.body.completed || false,
    contributors: req.body.contributors || [],
    creator: req.body.creator,
  });

  task
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Task created successfully!",
        task: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};
