import "./style.css";

const TodoList = ({ ToDos, handleToDo }) => {
  return (
    <div className="task-content">
      <h2>Lista de Tarefas</h2>
      <ul>
        {ToDos.map((currentItem, index) => (
          <div key={index} className="item-list">
            <button
              className="btn-remove"
              onClick={() => handleToDo(currentItem)}
            >
              ✓
            </button>
            <li>{currentItem}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
