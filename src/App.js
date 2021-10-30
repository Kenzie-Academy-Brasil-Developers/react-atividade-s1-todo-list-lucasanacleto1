import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [ToDos, setToDos] = useState([]);

  const addTodo = (newToDo) => {
    setToDos([...ToDos, newToDo]);
  };

  const handleToDo = (itemRemoved) => {
    setToDos(ToDos.filter((item) => item !== itemRemoved));
  };

  return (
    <div className="App">
      <header className="App-header">
        <Form addTodo={addTodo} />
        <TodoList ToDos={ToDos} handleToDo={handleToDo} />
      </header>
    </div>
  );
}

export default App;
