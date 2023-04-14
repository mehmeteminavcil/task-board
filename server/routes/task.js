import express from "express";

import {
  addTask,
  deleteTask,
  updateTask,
  userAllTasks,
} from "../controllers/task.js";
const router = express.Router();

router.post("/", addTask);
router.get("/:id", (req, res) => {
  res.send("ssdasd");
});

router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
router.get("/profile/:username", userAllTasks);

export default router;
