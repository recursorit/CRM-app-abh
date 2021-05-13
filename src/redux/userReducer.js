import { ADD_USER } from "./actions"

const initialState={
    users:[]
}

const userReducer = (state=initialState,action)=>{
    switch(action.type){
        case ADD_USER :
            return{
                ...state,
                users: (action.payload)
            }
        default: return state    
    }
}

export default userReducer