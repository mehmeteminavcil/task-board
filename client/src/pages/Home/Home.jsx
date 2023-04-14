import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import "./home.scss";

import Board from "../../components/Board/Board";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />

        <div className="homeHeader">
          <h1 className="title">Board</h1>
          <span>
            This week <KeyboardArrowDownRoundedIcon />
          </span>
        </div>

        <div className="homeMain">
          <Board />
        </div>
      </div>
    </div>
  );
};

export default Home;
