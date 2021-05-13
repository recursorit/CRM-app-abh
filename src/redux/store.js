import {combineReducers, createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './userReducer';


const rootReducer = combineReducers({
    users:userReducer
})

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware()))

export default store