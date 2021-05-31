import {combineReducers, createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import admineditReducer from './admineditReducer';
import categoryReducer from './categoryReducer';

import userIndexReducer from './userIndexReducer';
import userReducer from './userReducer';


const rootReducer = combineReducers({
    users:userReducer,
    index:userIndexReducer,
    adminEdit:admineditReducer,
    category:categoryReducer,
    
})

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware()))

export default store