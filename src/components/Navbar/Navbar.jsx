import "./navbar.scss";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <SearchRoundedIcon />
        <input type="text" placeholder="Search" />
      </div>
      <div className="right">
        <NotificationsNoneOutlinedIcon />
        <HelpOutlineOutlinedIcon />

        <img
          src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="profile_pic"
        />
      </div>
    </div>
  );
};

export default Navbar;
