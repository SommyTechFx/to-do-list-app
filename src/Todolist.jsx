import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const [editItemTask, setEditItemTask] = useState("");
  const [editTaskIndex, setEditTaskIndex] = useState(null);

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function setEditItemTaskChange(event) {
    setEditItemTask(event.target.value);
  }

  function setEditTaskIndexFunc(index) {
    setEditTaskIndex(index);
    setEditItemTask(tasks[index]);
  }

  function editTask(indexOfItem) {
    if (editItemTask.trim() !== "") {
      setTasks(
        tasks.map((item, index) =>
          index === indexOfItem ? editItemTask : item
        )
      );
      setEditItemTask("");
      setEditTaskIndex(null);
    }
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(indexOfItem) {
    setTasks(tasks.filter((_, index) => indexOfItem !== index));
  }

  return (

    <div> 
      <div className="Section">
  <h3>
         Daily Reminder
         <div className="Daily-Reminder">
           <span>Plan your day</span>
           <span>Be Consistent</span>
           <span>Be Discipline</span>
           <span>Put in the Work</span>
           <span>Have a Nice Day</span>
           <span>Plan your day</span>
         </div>
         For You  
         </h3>
                     
        </div>
      <div className="to-do-list">

    
   <h1>
     TO-DO-List <span>APP</span>{" "}
   </h1>

 
   
<div className="text-space">
 <input
   type="text"
   placeholder="Add Task...."
   value={newTask}
   onChange={handleInputChange}
 />

 <button className="add-btn" onClick={addTask}>
   Add
 </button>
</div>
 <ol>
   {tasks.map((task, index) => (
     <li key={index}>
       {editTaskIndex !== index ? (
         <div
           style={{
       flex: "1",
       display: "flex",
       justifyContent: "space-between",
       alignItems: "center",
     }}
   >
       <div className="list-text">{task}</div>

       <div>
         <button
           className="delete-btn"
         onClick={() => deleteTask(index)}
     >
       Delete
     </button>

     <button
       className="edit-btn"
       onClick={() => setEditTaskIndexFunc(index)}
     >
       Edit
     </button>
   </div>
 </div>
         ) : (
     <div style={{ display: "flex", width: "100%" }}>
       <input
         style={{ flex: "1", minWidth: "10px" }}
         type="text"
         placeholder="Edit Task...."
         value={editItemTask}
         onChange={setEditItemTaskChange}
       />

         <button className="add-btn" onClick={() => editTask(index)}>
           Save
         </button>
       </div>
     )}
   </li>
 ))}
</ol>
</div></div>
   
);
}
export default ToDoList;