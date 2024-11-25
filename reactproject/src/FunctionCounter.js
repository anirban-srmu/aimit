import React,{useState,useEffect} from "react";

function FunctionCounter(){
    const [count,setCount] = useState(0);//State hook for count

    //useEffect to handle lifestyle methods
    useEffect(()=>{
        console.log('Counter component mounted');
        return() =>{
            console.log('Counter component will unmount');
        };
    },[]); //Empty dependency array mena it will run only once(componentDidMount)

    useEffect(()=>{
        console.log('Counter component updated');
        console.log(`The count is now ${count}`);
    },[count]); //This will run whenever the counter changes(componentDidUpdate)

    // Increment count handler
    const incrementCount =()=>{
        setCount(prevCount => prevCount+1);
    };
    return(
        <div>
            <h1>Counter :{count}</h1>
            <button onClick={incrementCount}>Increment</button>
        </div>
    );
}

export default FunctionCounter;