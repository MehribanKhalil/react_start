import React from "react";

const [todos, setTodos] = useState([]);
const [text, setText] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  // console.log("salam");

  if (text) {
    setTodos([...todos, text]);

    console.log(text);
  } else {
    alert("bosdur");
  }
  setText("");
};

const handleChange = (e) => {
  e.preventDefault();

  setText(e.target.value);
};

const Todo = () => {
  return (
    <div>
      <div className="Todo">
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">Todo</label>
          <input type="text" value={text} onChange={handleChange} />
          <input type="submit" />
          <ul>{todos && todos.map((item) => <li>{item}</li>)}</ul>
        </form>
      </div>
    </div>
  );
};

export default Todo;
