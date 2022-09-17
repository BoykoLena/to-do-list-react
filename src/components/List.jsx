import "./List.css";

function List() {
  return (
    <div className="List">
      <form>
        <input type="text" placeholder="What needs to be done ?"></input>
        <button>
          <i class="fa-solid fa-plus"></i>
        </button>
      </form>
    </div>
  );
}

export default List;
