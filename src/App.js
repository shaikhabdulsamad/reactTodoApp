import './App.css';
import React from 'react'


function App() {

  const [value, setValue] = React.useState("");
  const [todos, setTodos] = React.useState([])
  const addTodo = () => {
    let arr = [...todos];
    if(value !== ""){

      arr.push(value)
      setTodos(arr)
      setValue("")
    }
    else{
      alert('Write something in input')
    }
  }

  const deleteTodo = (i) => {
        let arr = [...todos];
        arr.splice(i, 1)
        setTodos(arr)
      }

      let now = new Date()
    let today = now.getMonth()+1 +"/"+now.getDate()+"/"+now.getFullYear()
    let time = now.getHours()+":"+now.getMinutes()
    console.log(today,time)

  return (
    <div className="main">
      <div className="logo">
      <h1>TodoApp</h1>
      </div>
      <div className="inputDiv">
      <input value={value} onChange={(e) => setValue(e.target.value)}type="text" placeholder="Set your target here..." />
      <button onClick={addTodo}>Add</button>
      <button className="delbtn">Del All</button>
      </div>
      <div className="listDiv">
      <ul>
        {todos.map((v, i) => {
          return <li key={i}><span> <div className="time">{today} {time}</div> {v}</span><button>Edit</button><button className="delbtn" onClick={() => deleteTodo(i)}>Delete</button></li>
        })}
      </ul>
      </div>
   </div>
  );
}

export default App;
