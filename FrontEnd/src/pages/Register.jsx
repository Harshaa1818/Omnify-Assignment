import { useState } from "react"
import axios from "axios";

const Register=()=>{

    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');

    const handleRegister=()=>{
        axios.post('http://localhost:3000/api/v1/user/register',{
            email:userName,
            password:password
        })
        .then(()=>{
            alert('Registration Successful')
            window.location.href='/homepage'
        
        })
        .catch((error)=>{
            console.log(error)
    })
}

    return(
        <div>
        <h1>Register Page</h1>
        <div className='input-field-container'>
        <input type="text"  onChange={e=>setUserName(e.target.value)} placeholder="Enter your username"/>
        <input type="password" onChange={e=>setPassword(e.target.value)} placeholder="Enter your password"/>
        <button onClick={handleRegister} >Register</button>
        
        </div>
    </div>
    )

}
export default Register