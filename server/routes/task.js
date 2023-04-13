import express from "express";

import { addTask } from "../controllers/task.js";
const router = express.Router();

router.post("/task", addTask);
router.get("/task", (req, res) => {
  res.send("ssdasd");
});

export default router;

// router.post("/tasks", taskController.createTask);
// router.get("/tasks", taskController.getTasks);
// router.get("/tasks/:id", taskController.getTaskById);
// router.patch("/tasks/:id", taskController.updateTask);
// router.delete("/tasks/:id", taskController.deleteTask);
