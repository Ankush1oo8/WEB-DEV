import { set } from "mongoose";
import { useState } from "react";

export default function TodoList() {
  let [Todos, setTodos] = useState(["Sample task"]);
  let [newTodo, setNewTodo] = useState("");

  function addNewTask() {
    setTodos([...Todos, newTodo]);
    setNewTodo("");
  }

  let update = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <div>
      <input placeholder="ADD TASKS" value={newTodo} onChange={update} />
      <br />
      <button onClick={addNewTask}>ADD</button>
      <br />
      <br />
      <br />
      <hr />
      <h4>TODO LIST</h4>
      <ul>
        {Todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
