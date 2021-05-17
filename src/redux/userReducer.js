import moment from "moment";
import { ADD_USER } from "./actions"
//import CryptoJS from 'crypto-js'


const initialState={
    users:[
        {
            email:"abh",
            password:"abh",
            firstname:"Abh",
            lastname:"T",
            role:"admin" ,
            joined: moment().format('YYYY-MM-DD'),
            joinedTime:moment().format('h:mm:ss a'),
            status:"active"
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
                                            status:"active"
                                        }]
            }
        default: return state    
    }
}

export default userReducer