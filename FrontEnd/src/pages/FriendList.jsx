

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css'

    const FriendList = () => {

        const [friends,setFriends]=useState([])
        
       useEffect(()=>{
        axios.post("http://localhost:3000/api/v1/user/getFriendList",{token:document.cookie})
        .then((res)=>{
            setFriends((prev)=>[...prev,res.data.friends])

        })
        .catch((err)=>{
            console.log(err)
        })
       },[])

        return (
            <div>
                <h1>Friend List</h1>
                {friends.map((friend)=>(
                    friend && <div key={friend._id} className='card'>
                    <h2>{friend}</h2>
                    
                    </div>
                ))}
                
            </div>
        );
    }

    export default FriendList;

