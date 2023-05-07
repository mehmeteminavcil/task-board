import { useContext, useRef, useState } from "react";
import "./addTask.scss";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const AddTask = ({ handleToggleClick }) => {
  const categoryRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const [selectedColor, setSelectedColor] = useState("");

  const { user } = useContext(AuthContext);

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const task = {
      userId: user._id,
      category: categoryRef.current.value,
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      color: selectedColor,
    };
    try {
      await axios.post("http://localhost:5000/api/tasks/", task);
      handleToggleClick();
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
              <input
                ref={categoryRef}
                id="category"
                type="text"
                name="category"
                required
              />
            </li>
            <li>
              <label htmlFor="title">Title :</label>
              <input
                ref={titleRef}
                id="title"
                type="text"
                name="title"
                required
              />
            </li>

            <li>
              <label htmlFor="description">Description</label>
              <textarea
                ref={descriptionRef}
                id="description"
                name="description"
                required
              ></textarea>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  name="color"
                  value="red"
                  onChange={handleColorChange}
                  required
                />
                Red
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  name="color"
                  value="green"
                  onChange={handleColorChange}
                  required
                />
                Green
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  name="color"
                  value="blue"
                  onChange={handleColorChange}
                  required
                />
                Blue
              </label>
            </li>
          </ul>
          <button type="submit">Add Task</button>
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
