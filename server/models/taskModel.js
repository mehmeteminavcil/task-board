import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    category: {
      type: String,
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
    color: {
      type: String,
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
