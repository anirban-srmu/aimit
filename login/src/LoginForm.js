import React from 'react';

function LoginForm(){
    const [formData, setFormData] = React.useState({
        username:'',
        password: '',
    });

    function handleSubmit(event){
        event.preventDefault();
        alert(`User: ${formData.username},Password: ${formData.password}`);
        //call an API which will take user namd password as input and return true or flase along with a tocken
    }
    function handleChange(event){
        const {name,value} = event.target;
        setFormData({
            ...formData,
            [name]:value,
        });
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                type ="text"
                name= "username"
                value={formData.username}
                onChange={handleChange}
                />
            </label>
            <label>
                Password:
                <input
                type ="password"
                name ="password"
                value={formData.password}
                onChange={handleChange}
                />
            </label>
            <button type='submit'>Sumbit</button>
        </form>
    );
}

export default LoginForm;