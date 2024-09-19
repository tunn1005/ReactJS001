import './App.css'
import { useState } from "react";
import data from './data.json'
function App(props) {
  const [todoList, setTodoList] = useState(data);
  const toggleChecked = (index) => {
    setTodoList([...todoList], todoList[index].status = !todoList[index].status)
  }
  const addTodo = () => {
    const valueInput = document.getElementById("myInput").value;
    setTodoList([...todoList, data.push({ name: valueInput, status: false })])
  }
  return (
    <div className="container">
      <div id="myDIV" className="header">
        <h2 style={{ margin: "5px" }}>{props.myTitle}</h2>
        <input type="text" id="myInput" placeholder="Title..." />
        <span onClick={addTodo} className="addBtn">Add</span>
      </div>
      <ul id="myUL">
        {
          data.map((e, index) =>
            <li onClick={() => toggleChecked(index)} className={e.status?"":"checked"} key={index}>{e.name}</li>
          )
        }
      </ul>
    </div>
  );
}

export default App;
