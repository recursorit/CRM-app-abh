import moment from "moment";
import { ADD_CATEGORY, GET_CATINDEX, REMOVE_CATEGORY, UPDATE_CATEGORY } from "./categoryActions";


const initialState={
    categories:[
        {
            category:"type 1" ,
            joined: moment().format('YYYY-MM-DD'),
            index:0
        },
        {
            category:"type 2" ,
            joined: moment().format('YYYY-MM-DD'),
            index:1
        },
        {
            category:"type 3" ,
            joined: moment().format('YYYY-MM-DD'),
            index:2
        },
        {
            category:"type 4" ,
            joined: moment().format('YYYY-MM-DD'),
            index:3
        }
    ],
    currentIndex:0
}

const categoryReducer = (state=initialState,action) => {
    switch(action.type){
        case REMOVE_CATEGORY :
            
                return{
                    ...state,
                    categories:state.categories.filter(user=> user.index !== action.payload) 
                }
        case ADD_CATEGORY :
            
            return{
                ...state,
                categories:[...state.categories,{
                    category: action.payload,
                    joined: moment().format('YYYY-MM-DD'),
                    index: state.categories.length
                }] 
            }
        
        case GET_CATINDEX:
            return  {
                ...state,
                currentIndex:action.payload
            }  
            
        case UPDATE_CATEGORY :
            
            return{
                ...state,
                categories:state.categories.map(cate=>{
                    if(cate.index === state.currentIndex){
                        return{
                            category:action.payload,
                            joined: moment().format('YYYY-MM-DD'),
                            index:state.currentIndex
                        }
                    } return cate
                })
            }    
        default: return state
    }
}


export default categoryReducer