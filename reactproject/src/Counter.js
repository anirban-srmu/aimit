import React, {Component} from 'react';

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0
        };
    }

    //lifestyle method  called when the component is mounted
    componentDidMount(){
        console.log("Counter component is mounted");
    }

    //lifestyle method called when the component is updated
    componentDidUpdate(prevProps,precState){
        console.log("Counter component is updated");
    }

    //lifestyle method called before the component is unmounted
    componentWillUnmount(){
        console.log("Counter component will unmount");
    }

    incrementCounter = () =>{
        this.setState((prevState)=>({
            count: prevState.count + 1
        }));
    };

    render(){
        return(
            <div>
            <h1>Counter: {this.state.count} </h1>
            <button onClick={this.incrementCounter}>Increment</button>
            </div>
        );
    }
}

export default Counter;