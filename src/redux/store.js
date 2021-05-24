import {combineReducers, createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import admineditReducer from './admineditReducer';
// import loggedReducer from './loggedReducer';
import userIndexReducer from './userIndexReducer';
import userReducer from './userReducer';


const rootReducer = combineReducers({
    users:userReducer,
    index:userIndexReducer,
    adminEdit:admineditReducer,
    // logged:loggedReducer
})

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware()))

export default store