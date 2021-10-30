import { useState } from "react";
import "./style.css";

const Form = ({ addTodo }) => {
  const [textInput, setTextInput] = useState("");

  return (
    <div>
      <form className="form-content" action="">
        <input
          type="text"
          value={textInput}
          placeholder="Adicione uma Tarefa"
          onChange={(event) => setTextInput(event.target.value)}
        />
        <button
          className="btn-form"
          onClick={(event) => {
            event.preventDefault();
            addTodo(textInput);
            setTextInput("");
          }}
        >
          Adicionar Tarefa
        </button>
      </form>
    </div>
  );
};

export default Form;
