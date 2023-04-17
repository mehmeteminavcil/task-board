import { useContext, useEffect, useState } from "react";
import "./board.scss";
import axios, { all } from "axios";
import Section from "../Section/Section";
import Task from "../Task/Task";
import AddTask from "../AddTask/AddTask";
import { AuthContext } from "../../context/AuthContext";

const Board = () => {
  const { user } = useContext(AuthContext);
  const [showAddTask, setShowAddTask] = useState(false);

  const [allTask, setAllTask] = useState([]);
  const [todo, setTodo] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [done, setDone] = useState([]);

  const fetchTasks = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/tasks/profile/` + user.username
    );
    const todoData = res.data.filter((task) => task.state === "todo");
    const inProgress = res.data.filter((task) => task.state === "inprogress");
    const done = res.data.filter((task) => task.state === "done");
    setAllTask(res.data);

    setTodo(todoData);
    setInProgress(inProgress);
    setDone(done);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTaskToggle = () => {
    setShowAddTask(!showAddTask);
    console.log(showAddTask);
  };

  // console.logs
  console.log("rendered");

  return (
    <div className="board">
      <Section title={"To Do"} handleClick={handleAddTaskToggle}>
        {todo.map((task) => (
          <Task data={task} key={task._id} />
        ))}
      </Section>

      <Section title={"In Progress"}>
        {inProgress.map((task) => (
          <Task data={task} key={task._id} />
        ))}
      </Section>

      <Section title={"Done"}>
        {done.map((task) => (
          <Task data={task} key={task._id} />
        ))}
      </Section>

      <div
        className="addTask"
        style={{ display: showAddTask ? "block" : "none" }}
      >
        <AddTask handleToggleClick={handleAddTaskToggle} />
      </div>
    </div>
  );
};

export default Board;
