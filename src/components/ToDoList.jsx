import React from 'react'
import { useState } from 'react'

const ToDoList = () => {

    const [tasks, setTasks] = useState(['Eat Breakfast',"Dog barking"]);
    const [newTask,setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);

    }

    function addTask(){

        if(newTask.trim() !== ""){

            setTasks(t => [...t, newTask]);
            setNewTask("");
        }

    }

    function deleteTask(index){

        // const updatedTasks =tasks.filter((_, i) => i !== index);
        // setTasks(updatedTasks);

    }
  return (
   <>

   <div className='to-do-list'>

    <div className='input-box'>
        <input type='text' placeholder='Enter a task' value={newTask} onChange={handleInputChange}/>
        <button className='btn' onClick={addTask}>Add</button>
    </div>

    <ol className='lists'>
        {tasks.map((task,index)=>
        <li key={index} className='list-box'>
            <span className='text'>{task}</span>
            <button className='delete-btn' onClick={deleteTask(index)}>Delete</button>
        </li>
        )}
    </ol>

   </div>
   
   </>
  )
}

export default ToDoList