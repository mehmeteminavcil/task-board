import "./taskMenu.scss";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const TaskMenu = () => {
  const editTask = () => {
    console.log("edit task here");
  };

  const deleteTask = async () => {};

  return (
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
  );
};

export default TaskMenu;
