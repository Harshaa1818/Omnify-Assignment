import { Link } from 'react-router-dom'


const HomePage = () => {    
    return (
        <div>
             <h1>Welcome to FriendBook App</h1>
           <Link to="/login"><button >Click here to proceed</button></Link>
        </div>
    );
}
export default HomePage;