import { useState } from "react";
import TaskMenu from "../TaskMenu/TaskMenu";
import "./task.scss";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

const Task = ({ category, title, text, helper, color }) => {
  const [showMenu, setShowMenu] = useState(true);

  const handleButtonClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="task">
      <div style={{ display: showMenu ? "none" : "block" }}>
        <TaskMenu />
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
