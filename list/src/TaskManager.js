import React from "react";

function TaskManager(){
    const [tasks, setTask] = React.useState(['Lear React','Build React']);
    
    function addTask(){
        setTask([...tasks,'New Task']);
    }
    function removeTask(indexToRemove){
        setTask(tasks.filter((_,index)=> index !== indexToRemove));
    }
    return(
        <div>
            <ul>
                {tasks.map((task,index)=>(
                    <li key = {index}>
                        {task} <button onClick={()=>removeTask(index)}>Remove</button>
                        </li>
                ))}
            </ul>
            <button onClick={addTask}>Add Task</button>
        </div>
    );
}

export default TaskManager;