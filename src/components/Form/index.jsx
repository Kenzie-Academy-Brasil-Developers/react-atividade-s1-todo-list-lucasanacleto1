import { useState } from "react";
import "./style.css";

const Form = ({ addTodo }) => {
  const [userText, setUserText] = useState("");
  return (
    <div className="form-content">
      <input
        value={userText}
        onChange={(e) => setUserText(e.target.value)}
        placeholder="Adicione uma tarefa"
        type="text"
      />
      <button
        className="btn-form"
        onClick={(e) => {
          e.preventDefault();
          addTodo(userText);
          setUserText("");
        }}
      >
        Adicionar Tarefa
      </button>
    </div>
  );
};

export default Form;
