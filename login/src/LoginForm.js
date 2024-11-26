import React from 'react';

function LoginForm(){
    const [username, setUsername] = React.useState('');

    function handleSubmit(event){
        event.preventDefault();
        alert(`Username: ${username}`);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                type ="text"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                />
            </label>
            <button type='submit'>Sumbit</button>
        </form>
    );
}

export default LoginForm;