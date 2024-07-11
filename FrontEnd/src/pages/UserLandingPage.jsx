import { useEffect,useState } from "react";
import axios from 'axios';
import '../App.css'


const UserLandingPage = () => {

    const[items, setItems] = useState([{}])
    
    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/user/getAllUsers',)
        .then((response)=>{
            setItems(response.data.user)
        })
        .catch((error)=>console.log(error))
        
    }, [])  

    const ViewFriendList=()=>{
        window.location.href='/FriendList'
    }

    const AddFriend=(e)=>{
       
        axios.post('http://localhost:3000/api/v1/user/addFriend',{
            Headers:{
                token:document.cookie,
            },
            body:{
                friendId:e.target._id,
            }
        })
        .then(()=>{
            alert('Friend Added')
        })
        .catch((error)=>{
            console.log(error)
        })

    }

    return (
    <div>
        <div className="header">
        <h1>Welcome to User Landing Page</h1>
        <button onClick={ViewFriendList}>FriendList</button>
        </div>
        <div className="card-container">
            {items.map((item)=>(
                <div key={item._id} className="card">
                    <h2>{item.email}</h2>
                    <h2>{item._id}</h2>
                    <button onClick={AddFriend}>Add Friend</button>
                </div>
            ))}
            </div>
        
      
    </div>
  );
}

export default UserLandingPage;