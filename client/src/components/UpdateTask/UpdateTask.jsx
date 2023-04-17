import "./updateTask.scss";

const UpdateTask = ({
  category,
  title,
  description,
  color,
  handleToggleClick,
  handleFormChange,
  handleUpdateSubmit,
  state,
}) => {
  return (
    <div className="updateForm">
      <div className="updateContainer">
        <form onSubmit={handleUpdateSubmit}>
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
            <li>
              <label htmlFor="state">state :</label>
              <input
                value={state}
                id="state"
                type="text"
                name="state"
                onChange={handleFormChange}
              />
            </li>
            <li>
              <label htmlFor="color">color :</label>
              <input
                value={color}
                id="color"
                type="text"
                name="color"
                onChange={handleFormChange}
              />
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
