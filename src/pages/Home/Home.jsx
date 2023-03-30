import Navbar from "../../components/Navbar/Navbar";
import Section from "../../components/Section/Section";
import Sidebar from "../../components/Sidebar/Sidebar";
import Todo from "../../components/Todo/Todo";
import "./home.scss";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
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
          <Section />
          <Section />
          <Section />
        </div>
      </div>
    </div>
  );
};

export default Home;
