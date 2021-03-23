import '../style/UserTile.scss'
const UserTile = ({img, location, name}) => {
    return <div className='user-tile'>
        <img className='avatar' src={img} />
        <div className='info'>
            <p className='name'>{name}</p>
            <p className='location'>{location}</p>
        </div>
    </div>
}

export default UserTile;