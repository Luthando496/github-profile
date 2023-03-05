import React from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'


const UserItem = ({user:{login,avatar_url}}) => {
  return (
    <div className='card shadow-md compact side bg-base-100'>
    <div className="flex flex-row items-center space-x-4 card-body">

        <div>
            <div className="avatar">
                <div className="rounder-full shadow w-14 h-14">
                    <img src={avatar_url} alt="avatar-image" />
                </div>
            </div>

            
        </div>

        <div>
            <h3 className="card-title">
                {login}
                <Link className='text-base-content text-opacity-40' to={`/users/${login}`}>
                    Go To User
                </Link>
            </h3>
        </div>
    </div>
    </div>
  )
}


// UserItem.propTypes ={
//     user: PropTypes.object.isRequired,
// }

export default UserItem