import Sidebar from "../../components/Sidebar/Sidebar";
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">home container</div>
    </div>
  );
};

export default Home;
