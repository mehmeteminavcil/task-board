import { useContext, useRef } from "react";
import "./addTask.scss";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const AddTask = ({ handleToggleClick, fetchTask }) => {
  const category = useRef();
  const title = useRef();
  const description = useRef();

  const { user } = useContext(AuthContext);

  const handleClick = async (e) => {
    e.preventDefault();
    const task = {
      userId: user._id,
      category: category.current.value,
      title: title.current.value,
      description: description.current.value,
    };
    try {
      await axios.post("http://localhost:5000/api/tasks/", task);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="popupForm">
      <div className="formContainer">
        <form onSubmit={handleClick}>
          <ul>
            <li>
              <label htmlFor="category">Category :</label>
              <input ref={category} id="category" type="text" name="category" />
            </li>
            <li>
              <label htmlFor="title">Title :</label>
              <input ref={title} id="title" type="text" name="title" />
            </li>

            <li>
              <label htmlFor="description">Description</label>
              <textarea
                ref={description}
                id="description"
                name="description"
              ></textarea>
            </li>
          </ul>
          <button type="sumbit">Add Task</button>
        </form>
      </div>

      <div className="button-container">
        <button
          onClick={handleToggleClick}
          className="button button-red"
        ></button>
        <button className="button button-yellow"></button>
        <button className="button button-green"></button>
      </div>
    </div>
  );
};

export default AddTask;
