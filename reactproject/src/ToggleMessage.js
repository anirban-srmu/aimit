import React from "react";

function ToggleMessage(){
    const [show,setShow] = React.useState(false);
    return(
        <div>
            <button onClick={() => setShow(!show)}>
                {show ? "Hide" : "Show"} Message 
            </button>
            {show && <p> This is a toggled message!</p>}
        </div>
    );
}

export default ToggleMessage;