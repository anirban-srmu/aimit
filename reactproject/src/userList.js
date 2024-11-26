import React,{useState,useEffect} from "react";

function userList(){
    const [user,setUser] = useState([]);//state for data 
    const [loading,setLoading] = useState(true);//State for loading indicator
    const [error,setError] = useState(null);//State for error handeling

    useEffect(()=>{
        const fetchUsers =async() =>{
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                if (!response.ok){
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setUser(data);
            }catch (err){
                setError(err.message);
            }finally{
                setLoading(false);
            }

        };
        fetchUsers();
    },[]);//empty dependency array ensure the effect run only once
    if(loading) return <p>loading user ...</p>;
    if(error) return <p>Error: {error}</p>

    return(
        <div style={{padding : '2rem'}}>
            <h2>User List</h2>
            <ul>
                {user.map((user)=>
                <li key={user.id}>
                    <strong> {user.name}</strong> ({user.email})-{user.company.name}
                </li>
                )}
            </ul>
        </div>
    );
}

export default userList;