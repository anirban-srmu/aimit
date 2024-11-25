import React from "react";

function LoginStatus({isLoogedIn}){
    if (isLoogedIn){
        return <h1>Welcome Member.</h1>;
    }else{
        return <h1>Welcome Guest.</h1>;
    }
}

export default LoginStatus;