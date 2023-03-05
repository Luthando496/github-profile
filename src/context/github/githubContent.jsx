import { createContext,useReducer } from "react";
import githubReducer from "./githubReducer";
import axios from 'axios';

const GithubContext = createContext();



export const GithubProvider =({children})=>{
    const initialState ={
        users: [],
        load: false,
  
    }


    const clearUsers =()=>{
    dispatch({type:'CLEAR_USERS'})
    }

  
    
    const [state,dispatch] = useReducer(githubReducer,initialState)


    const setLoad =()=>{
      
        dispatch({type: "SET_LOAD"})
    }

    const SearchUsers = async(text) =>{
      setLoad();
        const {data} = await axios.get(`https://api.github.com/search/users?q=${text}`,{
          headers: {
            Authorization: `token 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`
          }
        })
    
    
        dispatch({
            type: "FETCH_USERS",
            payload: data.items
        })
      }



      return <GithubContext.Provider value={{
        users:state.users,
        load:state.load,
        SearchUsers,
        clearUsers,
      }}>
        {children}
      </GithubContext.Provider>
}

export default GithubContext;