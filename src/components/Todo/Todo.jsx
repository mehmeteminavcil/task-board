import "./todo.scss";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

const Todo = () => {
  return (
    <div className="todo">
      <div className="top">
        <div className="category">
          <div className="categoryColor"></div>
          <span className="category">DESIGN SYSTEM</span>
        </div>

        <MoreHorizRoundedIcon className="icon" />
      </div>

      <div className="center">
        <h2 className="title">Hero section</h2>
        <p>
          Create a design system for a hero section in 2 different variants.
          Create a simple presentation with these components.
        </p>
      </div>

      <div className="bottom">VH AG</div>
    </div>
  );
};

export default Todo;
