import "./board.scss";
import axios from "axios";
import { boards, tasks } from "../../data";
import Task from "../../components/Task/Task";
import Section from "../../components/Section/Section";
import { useEffect, useState } from "react";

const Board = () => {
  const [tasks, setTask] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("/profile/:username")
  //     .then((res) => setTask(res.data))
  //     .catch((err) => console.log(err));
  // });

  return <div className="board">boards</div>;
};

export default Board;
