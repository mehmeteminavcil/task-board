import { useContext, useState } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import "./task.scss";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import UpdateTask from "../UpdateTask/UpdateTask";

const Task = ({ data }) => {
  const [showMenu, setShowMenu] = useState(true);
  const [editTask, setEditTask] = useState([]);
  const [showEditTask, setShowEditTask] = useState(false);

  const [task, setTask] = useState(data);

  const handleEditTaskToggle = () => {
    setShowEditTask(!showEditTask);
  };

  const handleButtonClick = () => {
    setShowMenu(!showMenu);
  };

  const { user } = useContext(AuthContext);

  const handleEditClick = async (taskId) => {
    setShowEditTask(!showEditTask);
    console.log(task);
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

  const handleFormChange = (event) => {
    console.log(task);
    const { name, value } = event.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  return (
    <div className="task">
      <div style={{ display: showMenu ? "none" : "block" }}>
        <div className="taskMenu">
          <ul>
            <li onClick={() => handleEditClick(data)}>
              <EditOutlinedIcon className="icon" />
              <span> edit</span>
            </li>
            <li onClick={() => handleDeleteClick(data._id)}>
              <DeleteOutlineOutlinedIcon className="icon" />
              <span> delete</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="top">
        <div className="category">
          <div className={`categoryColor  ${data.color}`}></div>
          <span className="categoryText">{data.category}</span>
        </div>

        <MoreHorizRoundedIcon className="icon" onClick={handleButtonClick} />
      </div>

      <div className="center">
        <h2 className="title">{data.title}</h2>
        <p>{data.text}</p>
      </div>

      <div className="bottom">{data.helper}</div>

      <div
        className="editTask"
        style={{ display: showEditTask ? "block" : "none" }}
      >
        <UpdateTask
          title={task.title}
          color={task.color}
          handleToggleClick={handleEditTaskToggle}
          handleFormChange={handleFormChange}
        />
      </div>
    </div>
  );
};

export default Task;
