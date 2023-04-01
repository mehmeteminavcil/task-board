import Navbar from "../../components/Navbar/Navbar";
import Section from "../../components/Section/Section";
import Sidebar from "../../components/Sidebar/Sidebar";
import Todo from "../../components/Todo/Todo";

import "./home.scss";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

import { boards, tasks } from "../../data";

const Home = () => {
  function newTask() {
    console.log("calisti");
  }
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
          {boards.map((board) => (
            <Section
              handleClick={() => newTask()}
              key={board.id}
              title={board.title}
              children={tasks.map((task) => {
                if (board.status === task.status) {
                  return (
                    <Todo
                      key={task.id}
                      category={task.category}
                      title={task.title}
                      text={task.text}
                      helper={task.helper}
                      color={task.color}
                    />
                  );
                }
              })}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
