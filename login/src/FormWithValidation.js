import React from 'react';

function FormWithValidation(){
    const [email, setEmail] = React.useState('');
    const [error, setError] = React.useState('');
    
    function handleSubmit(event){
        event.preventDefault();
        if (!email.includes('@')){
            setError('Invalid email Address');
        }else{
            setError('');
            alert('Form submitted sucessfully!');
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input
                type ='email'
                value = {email}
                onChange = {(e)=>setEmail(e.target.value)}
                />
            </label>
            {error && <p style = {{color:'red'}}>{error}</p>}
            <button type="submit">Submit</button>
        </form>
    );
}

export default FormWithValidation;