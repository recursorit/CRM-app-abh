import { EDIT_INDEX } from "./actions"

const initialState={
    index:0
}

const admineditReducer = (state=initialState,action) => {
    switch(action.type){
        case EDIT_INDEX:
            return{
                ...state,
                index:action.payload
            }
        default: return state    
    }
}

export default admineditReducer