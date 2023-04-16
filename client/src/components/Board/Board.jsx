import { useContext, useEffect, useState } from "react";
import "./board.scss";
import axios from "axios";
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
  useEffect(() => {
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

    fetchTasks();
  }, [allTask]);

  const handleAddTaskToggle = () => {
    setShowAddTask(!showAddTask);
    console.log(showAddTask);
  };

  const handleDeleteClick = async (taskId) => {
    await axios
      .delete("http://localhost:5000/api/tasks/" + taskId, {
        data: { userId: user._id },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error.response.data);
      });
  };

  return (
    <div className="board">
      <Section title={"To Do"} handleClick={handleAddTaskToggle}>
        {todo.map((task) => (
          <Task
            deleteTask={() => handleDeleteClick(task._id)}
            key={task._id}
            category={task.category}
            title={task._id}
            text={task.userId}
            color={task.color}
          />
        ))}
      </Section>
      <Section title={"In Progress"}>
        {inProgress.map((task) => (
          <Task
            deleteTask={() => handleDeleteClick(task._id)}
            key={task._id}
            category={task.category}
            title={task.title}
            text={task.description}
            color={task.color}
          />
        ))}
      </Section>
      <Section title={"Done"}>
        {done.map((task) => (
          <Task
            deleteTask={() => handleDeleteClick(task._id)}
            key={task._id}
            category={task.category}
            title={task.title}
            text={task.description}
            color={task.color}
          />
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
