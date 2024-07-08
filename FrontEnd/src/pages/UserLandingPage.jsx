import { useEffect,useState } from "react";
import axios from 'axios';

const UserLandingPage = () => {

    const[items, setItems] = useState([{}])
    
    useEffect(() => {
        axios.get('http://localhost:3001/userlandingpage')
        .then((response)=>{
            setItems(response.data)
        })
        .catch((error)=>console.log(error))
        
    }, [])  


    return (
    <div>
        
      
    </div>
  );
}

export default UserLandingPage;