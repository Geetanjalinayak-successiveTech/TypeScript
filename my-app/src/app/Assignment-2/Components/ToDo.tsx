"use client";
import { useState } from "react";

export default function ToDo() {
  const [toDo, setToDo] = useState([]);
  const [inputVal, setInput] = useState("");

  const addTask = () => {
    if (inputVal.trim() === "") return;

    const newToDo = {
      id: Date.now(),
      task: inputVal,
      completed: false,
    };

    setToDo([...toDo, newToDo]);
    setInput("");
  };

  const updateToDo = (id) => {
    const update = toDo.map((ele) => 
      ele.id === id ? { ...ele, completed: !ele.completed } : ele
    );

    setToDo(update);
  };

  const deleteToDo = (id) => {
    const delToDo = toDo.filter((ele) => 
      ele.id !== id
    );
    setToDo(delToDo);
  };

  return (
    <div>
      <h2>To Do</h2>
      <input
        type="text"
        placeholder="Enter task"
        value={inputVal}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      {toDo.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => updateToDo(todo.id)}
          />
          {todo.task}
          <button onClick={() => deleteToDo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
    //   <div>
    //   <h2>To-Do List</h2>
    //   <input
    //     type="text"
    //     placeholder="Enter a task"
    //     value={inputVal}
    //     onChange={(e) => setInput(e.target.value)}
    //   />
    //   <button onClick={addTask}>Add</button>

    //   <ul>
    //     {console.log(toDo)}

    //     {toDo.map((todo) => (
    //       <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
    //         <input
    //           type="checkbox"
    //           checked={todo.completed}
    //           onChange={() => updateToDo(todo.id)}
    //         />
    //         {todo.task}
    //         <button onClick={() => deleteToDo(todo.id)}>Delete</button>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
}
