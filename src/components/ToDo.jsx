import "./ToDo.css";

function ToDo() {
  return (
    <div className="ToDo">
      <div className="ToDo-text">Hello</div>
      <div className="ToDo-buttons">
        <button className="ToDo-update">
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button className="ToDo-delete">
          <i class="fa-solid fa-trash-can"></i>
        </button>
        <button className="ToDo-check">
          <i class="fa-solid fa-check"></i>
        </button>
      </div>
    </div>
  );
}

export default ToDo;
