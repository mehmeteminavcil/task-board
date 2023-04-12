import "./sidebar.scss";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import DonutSmallOutlinedIcon from "@mui/icons-material/DonutSmallOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarContainer">
        <div className="top">
          <div className="logo">Pro Manage</div>
        </div>
        <div className="center">
          <ul>
            <li>
              <GridViewOutlinedIcon className="icon" />

              <span>Dashboard</span>
            </li>
            <li>
              <TableChartOutlinedIcon className="icon" />
              <span>Board</span>
            </li>
            <li>
              <DonutSmallOutlinedIcon className="icon" />
              <span>Analytics</span>
            </li>
            <li>
              <SettingsOutlinedIcon className="icon" />
              <span>Settings</span>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <LogoutIcon className="icon" />
          <span>Log out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
