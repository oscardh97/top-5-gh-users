import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../style/UserList.scss'

const top5GHUsers = ["GrahamCampbell","fabpot","weierophinney","rkh","josh"];

const UserList = () => {
    return <div className='user-list'>
        {top5GHUsers.map(_username => {
            
            return <Link key={_username} to={`/user/${_username}`}>
                <Button className='user-item'> {_username} </Button>
            </Link>
        })}
    </div>
};

export default UserList;