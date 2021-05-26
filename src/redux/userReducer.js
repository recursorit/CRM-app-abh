import moment from "moment";
import { ADD_USER, ADMIN_ADD, REMOVE_USER, UPDATE_USER } from "./actions"



const initialState={
    users:[
        {
            email:"abh@a.com",
            password:btoa("abhabhabh"),
            firstname:"Abh",
            lastname:"T",
            role:"admin" ,
            joined: moment().format('YYYY-MM-DD'),
            joinedTime:moment().format('h:mm:ss a'),
            status:"active",
            index:0
        }
    ]
}

const userReducer = (state=initialState,action)=>{
    
    switch(action.type){
        case ADD_USER :
            
            return{
                ...state,
                users: [...state.users,{...action.payload,
                                            role:"user",
                                            joined: moment().format('YYYY-MM-DD'),
                                            joinedTime:moment().format('h:mm:ss a'),
                                            status:"active",
                                            index: state.users.length
                                        }]
            }

            case ADMIN_ADD :
            
                return{
                    ...state,
                    users: [...state.users,{...action.payload,
                                                joined: moment().format('YYYY-MM-DD'),
                                                joinedTime:moment().format('h:mm:ss a'),
                                                index: state.users.length
                                            }]
                }


        case UPDATE_USER :
            
            return{
                ...state,
                users:state.users.map(user=>{
                    if(user.index === action.payload.index){
                        return {
                            index:action.payload.index,
                            email:action.payload.email,
                            password:action.payload.password,
                            firstname:action.payload.firstname,
                            lastname:action.payload.lastname,
                            role:action.payload.role,
                            status:action.payload.status,
                            joined: moment().format('YYYY-MM-DD'),
                            joinedTime:moment().format('h:mm:ss a'),
                        }
                    } return user
                })
                
            } 
        
            case REMOVE_USER :
            
                return{
                    ...state,
                    users:state.users.filter(user=> user.index !== action.payload) 
                }
            
        default: return state    
    }
}

export default userReducer