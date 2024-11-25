import React from "react";

function LoginStatus({isLoogedIn}){
    // if (isLoogedIn){
    //     return <h1>Welcome Member.</h1>;
    // }else{
    //     return <h1>Welcome Guest.</h1>;
    // }
    return(<div>
        {isLoogedIn ? <h1>Welcome Member.</h1> : <h1>Welcome Guest.</h1>}
    </div>);
}

export default LoginStatus;