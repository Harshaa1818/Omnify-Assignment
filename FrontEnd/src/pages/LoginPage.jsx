
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import "../App.css"
import axios from 'axios';

const LoginPage = () =>{

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    //const [isloggenIn, setIsloggenIn] = useState(false)

    const handleSubmit = () =>{

        

        if(username === '' || password === '') return alert('Please fill in all fields')

        axios.post('http://localhost:3000/api/v1/user/login', {
            email: username,
            password: password
        })
        .then((res)=>{
            alert('Login Successful')
            window.location.href='/UserLandingPage';
            document.cookie.name=`token'=${res.cookie.AccessToken}`
            
        })
        .catch((error)=>{
            console.log(error)
        })

       
    }


    return(
        <div>
            
            <h1>Login Page</h1>
            <div className='input-field-container'>
            <input type="text" placeholder="Enter your username" onChange={(e)=>setUsername(e.target.value)}/>
            <input type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
            <button  onClick={handleSubmit}>Login</button>
            <NavLink to='/register'><button  className='registerButton'>Register</button></NavLink>
            </div>
        </div>
    )

}
export default LoginPage