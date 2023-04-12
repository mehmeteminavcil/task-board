import "./navbar.scss";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <SearchRoundedIcon className="icon" />
        <input type="text" placeholder="Search" />
      </div>
      <ul className="right">
        <li>
          <NotificationsNoneOutlinedIcon className="icon" />
        </li>
        <li>
          <HelpOutlineOutlinedIcon className="icon" />
        </li>
        <li>
          <img
            src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="profile_pic"
          />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
