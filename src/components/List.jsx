import "./List.css";
import ToDo from "./ToDo";

function List() {
  return (
    <div className="List">
      <form>
        <input type="text" placeholder="What needs to be done ?"></input>
        <button>
          <i className="fa-solid fa-plus"></i>
        </button>
      </form>

      <ToDo />
    </div>
  );
}

export default List;
