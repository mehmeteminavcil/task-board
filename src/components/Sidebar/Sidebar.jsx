import "./sidebar.scss";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import DonutSmallOutlinedIcon from "@mui/icons-material/DonutSmallOutlined";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="logo">Pro Manage</div>
      </div>
      <div className="center">
        <ul>
          <li>
            <GridViewOutlinedIcon />
            <span>Dashboard</span>
          </li>
          <li>
            <TableChartOutlinedIcon />
            <span>Board</span>
          </li>
          <li>
            <DonutSmallOutlinedIcon />
            <span>Analytics</span>
          </li>
          <li>
            <SettingsOutlinedIcon />
            <span>Settings</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <GridViewOutlinedIcon />
        <span>Log out</span>
      </div>
    </div>
  );
};

export default Sidebar;
