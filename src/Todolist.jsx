import React, { useState } from 'react'

function ToDoList(){

    const[tasks, setTasks] = useState([" Say A Pray", "Exercise", "eat Breakfast"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){

        if(newTask.trim() !==""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
   
    }

    function deleteTask(index){
      
    } 

    function editTask(index){

    }
return(<div className="to-do-list">

<h1>TO-DO-List <span>APP</span>  </h1>

    <div>
        <input type = "text" placeholder="Add Task...." value = {newTask} onChange= {handleInputChange}/>

        <button className='add-btn' onClick={addTask}>
            Add
        </button>
    </div>
<ol>
    {tasks.map((task, index) => 
    <li key={index}>
        <span className = "list-text">{task}</span>

        <button className="delete-btn" onClick={deleteTask(() => index)}>
            Delete 
        </button>

        
        <button className="edit-btn" onClick={ editTask(() => index)}>
             ✏️
        </button>
    </li>)}
</ol>
</div>);

}
export default ToDoList