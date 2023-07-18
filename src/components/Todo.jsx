import { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleOnchange = (even) => {
    setInput(even.target.value);
  };

  const handleDeleteTask = (i) => {
    let newList = todoList.filter((item) => item !== i);
    console.log(newList);
  };

  const handleOnSubmit = () => {
    setTodoList([...todoList, input]);
  };

  return (
    <>
      <input
        onChange={(even) => handleOnchange(even)}
        type="text"
        placeholder="Enter your task"
        value={input}
      />
      <button onClick={handleOnSubmit}>Add To List</button>
      {todoList.map((todo, i) => {
        return (
          <p key={i}>
            {todo} <button onClick={() => handleDeleteTask(i)}>delet</button>
          </p>
        );
      })}
    </>
  );
};

export default Todo;
