import React from "react";

function Profile({user}){
    return(
        <div>
            {user ?(
                <div>
                    <p>Welcome , {user.name}</p>
                    <button>Logout</button>
                </div>
            ):(
                <button>Login</button>
            )}
        </div>
    );
}

export default Profile;