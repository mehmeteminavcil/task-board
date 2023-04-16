import express from "express";

import {
  addTask,
  deleteTask,
  getTask,
  updateTask,
  userAllTasks,
} from "../controllers/task.js";
const router = express.Router();

router.post("/", addTask);
router.get("/:id", getTask);

router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
router.get("/profile/:username", userAllTasks);

export default router;
