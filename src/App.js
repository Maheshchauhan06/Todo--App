import './App.css';
import Task from './Task'
import { useState } from 'react';

function App() {

  const [input, setinput] = useState('')
  
  const inputvalue = (e) =>{
    setinput(e.target.value)
  }
   
   const add = (e) =>{
    e.preventDefault();
   }


  return (
    <>
     <div className="container">
     <form action="submit">
      <div className="todo-box">
       <div className="todo-input">
       <input  onChange={inputvalue}  placeholder='Add work todo' type="text" />
       <button onClick={add} >Add</button>
       </div>
       <div className="todo-tasks">
         <Task input = {input} />
         <Task/>
         <Task/>
       </div>
      </div></form>
     </div>
    </>
  );
}

export default App;
