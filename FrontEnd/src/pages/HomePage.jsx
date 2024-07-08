import { Link } from 'react-router-dom'


const HomePage = () => {    
    return (
        <div>
           <Link to="/login"><button >Click here to proceed</button></Link>
        </div>
    );
}
export default HomePage;