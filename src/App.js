import './App.css';
import Task from './Task'
import { useState , useEffect } from 'react';

function App() {

  const [input, setinput] = useState('')
  
  const inputvalue = (e) =>{
    setinput(e.target.value)
  }
   
   const add = (e) =>{
    e.preventDefault();
    settodos([{
       id : Math.random()*10000,
       text : input,
    },...todos,
  ])

    setinput('')
   }

   const Delete =(id)=>{
    settodos(todos.filter((todo)=>todo.id!==id))
   }

   const [todos, settodos] = useState([])

   useEffect(() => {
    if(todos?.length)
     localStorage.setItem('item',JSON.stringify(todos))
   }, [todos])
   
   useEffect(()=> {
    const storedTodos = JSON.parse(localStorage.getItem('item'));
    if (storedTodos) settodos(storedTodos);
  }, []);



  return (
    <>
     <div className="container">
     <form action="submit">
      <div className="todo-box">
       <div className="todo-input">
       <input value={input}  onChange={inputvalue}  placeholder='Add work todo' type="text" />
       <button disabled={!input} onClick={add} >Add</button>
       </div>
       <div className="todo-tasks">
       {  todos?.map( 
        todo => <Task text={todo.text} Delete={Delete}  id ={todo.id} />
        )
       }
       </div>
      </div></form>
     </div>
    </>
  );
}

export default App;
