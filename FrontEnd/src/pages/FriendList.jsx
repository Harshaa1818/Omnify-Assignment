

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css'

    const FriendList = () => {

        const [friendsId,setFriendsId]=useState([])
       
        
       useEffect(()=>{
        axios.post("http://localhost:3000/api/v1/user/getFriendList",{token:document.cookie})
        .then((res)=>{
            
            setFriendsId(res.data.friends)
            

        })
        .catch((err)=>{
            console.log(err)
        })
       },[])
       console.log(friendsId)

        //  useEffect(()=>{
        //     friendsId.map((friend)=>{
        
        
        //         axios.get(`http://localhost:3000/api/v1/user/getUserById/:${friend}`)
        //         .then((res)=>{
        //             console.log(res.data)
        //             setFriends((prev)=>[...prev,res.data])
        //         })
        //         .catch((err)=>{
        //             console.log(err)
        //        })
        //     })
        //  })

        return (
            <div>
                <h1>Friend List</h1>
                <div className="Fheader">
                {friendsId.map((friend)=>{
                    return(
                        <div className="friendcard">
                            <h2>{friend}</h2>
                            
                        </div>
                    )
                })}
                </div>
                
                
            </div>
        );
    }

    export default FriendList;

