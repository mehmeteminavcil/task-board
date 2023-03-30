import "./section.scss";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import Todo from "../Todo/Todo";
const Section = ({ children }) => {
  return (
    <div className="section">
      <div className="top">
        <h3 className="title">To do</h3>

        <div className="right">
          <AddRoundedIcon className="icon" />
          <MoreHorizRoundedIcon className="icon" />
        </div>
      </div>

      <div className="bottom">
        <Todo />
        <Todo />
      </div>
    </div>
  );
};

export default Section;
