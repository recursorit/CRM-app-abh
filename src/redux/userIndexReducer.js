import { GET_INDEX } from "./actions"

const initialState={
    currentuser:0
}

const userIndexReducer = (state=initialState,action) => {
    switch(action.type){
        case GET_INDEX:
            return{
                ...state,
                currentuser:action.payload
            }
        default: return state    
    }
}

export default userIndexReducer
