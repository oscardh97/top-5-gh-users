import '../style/UserTile.scss'
const UserTile = ({img, location, name}) => {
    return <div className='user-tile'>
        <img className='avatar' src={img} />
        <div className='info'>
            <div className='name'>{name}</div>
            <div className='location'>{location}</div>
        </div>
    </div>
}

export default UserTile;