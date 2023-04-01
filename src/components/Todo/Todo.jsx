import "./todo.scss";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

const Todo = ({ category, title, text, helper, color }) => {
  return (
    <div className="todo">
      <div className="top">
        <div className="category">
          <div className={`categoryColor  ${color}`}></div>
          <span className="categoryText">{category}</span>
        </div>

        <MoreHorizRoundedIcon className="icon" />
      </div>

      <div className="center">
        <h2 className="title">{title}</h2>
        <p>{text}</p>
      </div>

      <div className="bottom">{helper}</div>
    </div>
  );
};

export default Todo;
