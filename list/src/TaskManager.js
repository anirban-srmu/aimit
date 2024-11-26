import React from "react";

function TaskManager(){
    const [tasks, setTask] = React.useState(['Lear React','Build React']);
    // const [items, setTask] = React.useState([
    //     {name: 'Milk',bought:false},
    //     {name: 'Bread',bought:false}
    // ]);
    
    function addTask(){
        const newTask = prompt('Enter task:');
        setTask([...tasks,[newTask]]);
    }
    function removeTask(indexToRemove){
        setTask(tasks.filter((_,index)=> index !== indexToRemove));
    }
    function updateTask(indexToUpdate){
        const newTasks = [...tasks];
        const upTask = prompt('Enter updated Task:')
        newTasks[indexToUpdate] = upTask;
        setTask(newTasks);
    }
    return(
        <div>
            <ul>
                {tasks.map((task,index)=>(
                    <li key = {index}>
                        {task}{'  '} 
                        <button onClick={()=>updateTask(index)}>Update</button>
                        <button onClick={()=>removeTask(index)}>Remove</button>
                        </li>
                ))}
            </ul>
            <button onClick={addTask}>Add Task</button>
        </div>
    );
}

export default TaskManager;