import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

import "./App.css";

function App() {
  const [List, setList] = useState([]);

  const addTodo = (newTodo) => {
    setList([...List, newTodo]);
  };

  const handleTodo = (removedItem) => {
    setList(List.filter((item) => item !== removedItem));
  };
  return (
    <div className="App">
      <header className="App-header">
        <Form addTodo={addTodo} />
        <TodoList handleTodo={handleTodo} List={List} />
      </header>
    </div>
  );
}

export default App;
