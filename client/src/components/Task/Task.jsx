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

  // Update Task  && handle form change

  const handleFormChange = (event) => {
    console.log(task);
    const { name, value } = event.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      userId: user._id,
      title: task.title,
      description: task.description,
      state: task.state,
      color: task.color,
    };

    await axios
      .put("http://localhost:5000/api/tasks/" + task._id, requestData)
      .then((response) => {
        handleEditClick();
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error.response.data);
      });
  };

  // Delete Click

  const handleDeleteClick = async (taskId) => {
    await axios
      .delete("http://localhost:5000/api/tasks/" + taskId, {
        data: { userId: user._id },
      })
      .then((response) => {
        window.location.reload();
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error.response.data);
      });
  };

  return (
    <div className="task">
      <div style={{ display: showMenu ? "none" : "block" }}>
        <div className="taskMenu">
          <ul>
            <li onClick={() => handleEditClick(task._id)}>
              <EditOutlinedIcon className="icon" />
              <span> edit</span>
            </li>
            <li onClick={() => handleDeleteClick(task._id)}>
              <DeleteOutlineOutlinedIcon className="icon" />
              <span> delete</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="top">
        <div className="category">
          <div className={`categoryColor  ${task.color}`}></div>
          <span className="categoryText">{task.category}</span>
        </div>

        <MoreHorizRoundedIcon className="icon" onClick={handleButtonClick} />
      </div>

      <div className="center">
        <h2 className="title">{task.title}</h2>
        <p>{task.description}</p>
      </div>

      <div className="bottom">{task.helper}</div>

      <div
        className="editTask"
        style={{ display: showEditTask ? "block" : "none" }}
      >
        <UpdateTask
          category={task.category}
          title={task.title}
          description={task.description}
          color={task.color}
          state={task.state}
          handleToggleClick={handleEditTaskToggle}
          handleFormChange={handleFormChange}
          handleUpdateSubmit={handleUpdateSubmit}
        />
      </div>
    </div>
  );
};

export default Task;
