import "./updateTask.scss";

const UpdateTask = ({
  category,
  title,
  description,
  color,
  handleToggleClick,
  handleFormChange,
}) => {
  return (
    <div className="updateForm">
      <div className="updateContainer">
        <form>
          <ul>
            <li>
              <label htmlFor="category">Category :</label>
              <input
                value={category}
                id="category"
                type="text"
                name="category"
                onChange={handleFormChange}
              />
            </li>
            <li>
              <label htmlFor="title">Title :</label>
              <input
                value={title}
                id="title"
                type="text"
                name="title"
                onChange={handleFormChange}
              />
            </li>

            <li>
              <label htmlFor="description">Description</label>
              <textarea
                value={description}
                id="description"
                name="description"
                onChange={handleFormChange}
              ></textarea>
            </li>
          </ul>
          <button type="sumbit">Update Task</button>
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

export default UpdateTask;
