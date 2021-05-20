import { LOGGED_IN, LOGGED_OUT } from "./actions"

const initialState={
    loggedIn:false,
    currentUser:""
}

const loggedReducer = (state=initialState,action)=>{
    switch(action.type){
        case LOGGED_IN: return{
            ...state,
            loggedIn:true,
            currentUser:action.payload
        }

        case LOGGED_OUT: return{
            ...state,
            loggedIn:false,
            currentUser:""
        }

        default :return state
    }
}

export default loggedReducer