import React from 'react'

function Tasklist(){
    const tasks = ['Learn React','Build React','Get a job'];
    return(
        <ul>
            {tasks.map((task,index)=>(
            <li key={index}>{task}</li>
        ))}
        </ul>
    );
}

export default Tasklist;