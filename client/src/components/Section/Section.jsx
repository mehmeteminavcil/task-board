import "./section.scss";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
const Section = ({ title, children, handleToggleClick }) => {
  return (
    <div className="section">
      <div className="top">
        <h3 className="title">{title}</h3>

        <div className="right">
          <AddRoundedIcon className="icon" onClick={handleToggleClick} />
          <MoreHorizRoundedIcon className="icon" />
        </div>
      </div>

      <div className="bottom">{children}</div>
    </div>
  );
};

export default Section;
