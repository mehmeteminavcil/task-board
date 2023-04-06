import "./taskMenu.scss";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const TaskMenu = () => {
  return (
    <div className="taskMenu">
      <ul>
        <li>
          <EditOutlinedIcon className="icon" />
          <span> edit</span>
        </li>
        <li>
          <DeleteOutlineOutlinedIcon className="icon" />
          <span> delete</span>
        </li>
      </ul>
    </div>
  );
};

export default TaskMenu;
