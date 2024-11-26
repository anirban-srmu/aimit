import React from "react";

function TaskManager(){
    const [tasks, setTask] = React.useState(['Lear React','Build React']);
    
    function addTask(){
        setTask([...tasks,'New Task']);
    }
    return(
        <div>
            <ul>
                {tasks.map((task,index)=>(
                    <li key = {index}>{task}</li>
                ))}
            </ul>
            <button onClick={addTask}>Add Task</button>
        </div>
    );
}

export default TaskManager;