import { Navbar, Nav } from "react-bootstrap";
import UserList from "../components/UserList"
import '../style/Home.scss'

const Home = () => {
    return <div className='home-view'>
        
        <Navbar bg="dark" variant="dark">
            <Nav>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav>
        </Navbar>
        <div className='content'>
            <p className='title'>Top 5 GitHub Users</p>
            <p className='sub-title'>Tap the username to see more information</p>

            <UserList />
        </div>
    </div>
};

export default Home;