import './App.css';
import Task from './Task'

function App() {
  return (
    <>
     <div className="container">
      <div className="todo-box">
       <div className="todo-input">
       <input type="text" />
       <button >Add</button>
       </div>
       <div className="todo-tasks">
         <Task/>
         <Task/>
         <Task/>
       </div>
      </div>
     </div>
    </>
  );
}

export default App;
