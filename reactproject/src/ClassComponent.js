import React,{Component} from "react";

class ClassComponent extends Component{
    render(){
        return(
            <div>
                <h2>
                    Hello from Class Component
                </h2>
                <p>
                    {this.props.message}
                </p>
            </div>
        );
    }
}

export default ClassComponent;