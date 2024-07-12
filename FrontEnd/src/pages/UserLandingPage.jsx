import { useEffect,useState } from "react";
import axios from 'axios';
import '../App.css'
import { NavLink } from "react-router-dom";


const UserLandingPage = () => {

    const[items, setItems] = useState([{}])
    const [friends,setFriends]=useState([])
    
    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/user/getAllUsers',)
        .then((response)=>{
            setItems(response.data.user)
        })
        .catch((error)=>console.log(error))
        
    }, [])  

   

    const AddFriend=(key)=>{
       console.log(key);
        axios.post('http://localhost:3000/api/v1/user/addFriend',{token:document.cookie,friendId:key})
        .then((res)=>{
            alert('Friend Added');
           setFriends((prev)=>[...prev,res.data.user]);

        })
        .catch((error)=>{
            console.log(error)
        })

    }

   // console.log(friends);

    return (
        <div>
            <div className="header">
                <h1>Welcome to User Landing Page</h1>
                <NavLink to="/FriendList">
                    <button>FriendList</button>
                </NavLink>
            </div>
            <div className="card-container">
                {items.map((item) => (
                    <div key={item._id} className="card">
                        <h2>{item.email}</h2>
                        <h2>{item._id}</h2>
                        <button  onClick={() => AddFriend(item._id)}>Add Friend</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserLandingPage;