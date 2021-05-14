import {combineReducers, createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import userIndexReducer from './userIndexReducer';
import userReducer from './userReducer';


const rootReducer = combineReducers({
    users:userReducer,
    index:userIndexReducer
})

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware()))

export default store