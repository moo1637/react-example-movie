import { useEffect, useState } from "react";

function TodoList() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") return;
    setToDo("");
    setToDos((cur) => [toDo, ...cur]);
  };

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button onClick={onSubmit}>Add To Do</button>
      </form>
      <hr />
      {toDos.map((toDo, i) => {
        return <li key={i}>{toDo}</li>;
      })}
    </div>
  );
}

export default TodoList;
