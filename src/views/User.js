import { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useParams } from "react-router";
import UserTile from "../components/UserTile";
import { getUser } from "../services/github";
const User = () => {
    const {username} = useParams();
    const [user, setUser] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            const _user = await getUser(username);
            if (_user) {
                setUser(_user)
            } else {
                setError(true);
            }
        } 

        fetchUser();
    }, [username]);

    return <div className='user-view'>
        
        <Navbar bg="dark" variant="dark">
            <Nav>
                <Nav.Link href="/">Back</Nav.Link>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav>
        </Navbar>
        {error ? <h1>There was an error when trying to get the user</h1> : 
            user ?
            <UserTile name={user.name} location={user.location} img={user.avatar_url}/>
        : <p>Loading...</p>
        }
    </div>
}

export default User;