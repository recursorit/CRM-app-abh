import moment from "moment";
import { ADD_PROJECT, GET_PROINDEX, REMOVE_PROJECT, UPDATE_PROJECT } from "./projectActions";


const initialState = {
    projects:[
        {
            project:"project 1",
            developer:"abh",
            category:"type 1",
            created: moment().format('YYYY-MM-DD'),
            index:0
        }
    ],
    currentIndex:0
}

const projectReducer = (state= initialState, action) => {
    switch(action.type){
        case REMOVE_PROJECT :
            
            return{
                ...state,
                projects:state.projects.filter(user=> user.index !== action.payload) 
            }
        case GET_PROINDEX:
            return  {
                ...state,
                currentIndex:action.payload
            } 
         
        case UPDATE_PROJECT :
            
            return{
                ...state,
                projects:state.projects.map(pro=>{
                if(pro.index === state.currentIndex){
                        return{
                            project:action.payload.project,
                            developer:action.payload.developer,
                            category:action.payload.category,
                            created: moment().format('YYYY-MM-DD'),
                            index:state.currentIndex
                        }
                    } return pro
                })
            } 
            
            case ADD_PROJECT :
            
                return{
                    ...state,
                    projects:[...state.projects,{
                        project:action.payload.project,
                        developer:action.payload.developer,
                        category:action.payload.category,
                        created: moment().format('YYYY-MM-DD'),
                        index: state.projects.length
                    }] 
                }    
        default: return state
    }
}

export default projectReducer