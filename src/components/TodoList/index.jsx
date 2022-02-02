import "./style.css";

const TodoList = ({ handleTodo, List }) => {
  return (
    <>
      <h2>Lista de Tarefas</h2>
      <ul>
        {List.map((currentItem, index) => (
          <div key={index} className="item-list">
            <button
              className="btn-remove"
              onClick={() => handleTodo(currentItem)}
            >
              ✓
            </button>
            <li>{currentItem}</li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
