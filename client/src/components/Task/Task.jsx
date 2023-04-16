import { useState } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import "./task.scss";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import axios from "axios";

const Task = ({ category, deleteTask, title, text, helper, color }) => {
  const [showMenu, setShowMenu] = useState(true);

  const handleButtonClick = () => {
    setShowMenu(!showMenu);
  };
  const editTask = () => {
    console.log("edit task here");
  };

  return (
    <div className="task">
      <div style={{ display: showMenu ? "none" : "block" }}>
        <div className="taskMenu">
          <ul>
            <li onClick={editTask}>
              <EditOutlinedIcon className="icon" />
              <span> edit</span>
            </li>
            <li onClick={deleteTask}>
              <DeleteOutlineOutlinedIcon className="icon" />
              <span> delete</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="top">
        <div className="category">
          <div className={`categoryColor  ${color}`}></div>
          <span className="categoryText">{category}</span>
        </div>

        <MoreHorizRoundedIcon className="icon" onClick={handleButtonClick} />
      </div>

      <div className="center">
        <h2 className="title">{title}</h2>
        <p>{text}</p>
      </div>

      <div className="bottom">{helper}</div>
    </div>
  );
};

export default Task;
