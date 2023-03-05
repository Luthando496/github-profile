import React,{useContext} from 'react'
import axios from 'axios'
import Spinner from '../Layout/Spinner'
import UserItem from './UserItem'
import GithubContext from '../../context/github/githubContent'



const UserResults = () => {

    const {users,load,} = useContext(GithubContext)

  

  
  if(!load){
    
      return (
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
    
        {/* search component */}
    
        {users.map(user=>(
          <UserItem key={user.id} user={user} />
        ))}
        </div>
      )
  }else{
    return(
      <Spinner />
    )
  }
}

export default UserResults