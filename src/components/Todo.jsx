import { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const handleOnchange = (even) => {
    setInput(even.target.value);
  };

  const handleDeleteTask = (i) => {
    let newList = todoList.filter((x) => x !== i);
    setTodoList(newList);
  };

  const handleOnSubmit = () => {
    setTodoList([...todoList, input]);
    setInput("");
  };

  return (
    <>
    <h1>React Todo App</h1>
      <div className="maindiv">
        <div className="maindiv1">
          {todoList.map((todo, i) => {
            return (
              <p key={i}>
                {todo}{" "}
                <button onClick={() => handleDeleteTask(todo)}>delet</button>
              </p>
            );
          })}

          {todoList[0] == undefined && <p>no item found</p>}
        </div>

        <div className="maindiv2">
          <input
            onChange={(even) => handleOnchange(even)}
            type="text"
            placeholder="Enter your task"
            value={input}
          />
          <button onClick={handleOnSubmit}>Add To List</button>
        </div>
      </div>
    </>
  );
};

export default Todo;
