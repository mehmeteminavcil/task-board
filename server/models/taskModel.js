import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["DESIGN SYSTEM", "DEVELOPMENT", "TYPOGRAPHY"],
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      enum: ["todo", "inprogress", "done"],
      default: "todo",
    },
    contributors: [
      {
        type: Array,
        default: [],
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Task = new mongoose.model("Task", taskSchema);

export default Task;
