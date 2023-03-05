import React,{useState,useContext} from 'react'
import GithubContext from '../../context/github/githubContent'
import AlertContext from '../../context/alert/AlertContext'




const UserSearch = () => {
    const [text,setText] = useState('')

    const {users,SearchUsers,clearUsers} = useContext(GithubContext)
    const {setAlert} = useContext(AlertContext)


    const handleChange =(e)=>{
        setText(e.target.value)
    }

    const Submit=(e)=>{
        e.preventDefault();

        if(text === ''){
            setAlert('Please enter text','error')
        }else{
            SearchUsers(text)
            setText('')
        }
    }
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
        <div>
            <form className="" onSubmit={Submit}>
                <div className="form-control">
                    <div className="relative">
                        <input className="w-full pr-40 bg-gray-400 input input-lg" placeholder='search people' value={text} onChange={handleChange}></input>
                        <button type='submit' className="absolute top-0 r-0 rounded-l-none w-36 btn btn-lg">Search</button>
                    </div>
                </div>
            </form>

            {users.length > 0 && (
        <button className="btn btn-ghost btn-larger" onClick={clearUsers}>Clear</button>
            )}
        </div>

    </div>
  )
}

export default UserSearch