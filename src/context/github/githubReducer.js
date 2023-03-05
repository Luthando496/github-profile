const githubReducer =(state,action)=>{
    switch (action.type){
        case 'FETCH_USERS':
            return {
                ...state,
                users:action.payload,
                load:false
            };

            case 'SET_LOAD':{
                return{
                    ...state,
                    load:true
                }
            }
            case 'CLEAR_USERS':{
                return{
                    ...state,
                    users:[]
                }
            }

        default:{
            return state;
        }
    }

    
}

export default githubReducer;