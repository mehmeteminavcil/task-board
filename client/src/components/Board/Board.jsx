import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import "./board.scss";
import axios, { all } from "axios";
import Section from "../Section/Section";
import Task from "../Task/Task";
import AddTask from "../AddTask/AddTask";
import { AuthContext } from "../../context/AuthContext";

const Board = () => {
  const { user } = useContext(AuthContext);
  const [allTasks, setAllTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  const fetchTasks = useCallback(async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/tasks/profile/${user.username}`
      );
      setAllTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  }, [user.username]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const tasksTodo = useMemo(
    () => allTasks.filter((task) => task.state === "todo"),
    [allTasks]
  );
  const tasksInProgress = useMemo(
    () => allTasks.filter((task) => task.state === "inprogress"),
    [allTasks]
  );
  const tasksDone = useMemo(
    () => allTasks.filter((task) => task.state === "done"),
    [allTasks]
  );

  //toggle
  const handleAddTaskToggle = () => {
    setShowAddTask(!showAddTask);
    console.log(showAddTask);
  };

  return (
    <div className="board">
      <Section title={"To Do"} handleToggleClick={handleAddTaskToggle}>
        {tasksTodo.map((task) => (
          <Task data={task} key={task._id} />
        ))}
      </Section>

      <Section title={"In Progress"}>
        {tasksInProgress.map((task) => (
          <Task data={task} key={task._id} />
        ))}
      </Section>

      <Section title={"Done"}>
        {tasksDone.map((task) => (
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
