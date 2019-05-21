import loginReducer from './loginStore/reducer.js'
import {combineReducers, createStore,applyMiddleware} from "redux";
import promiseMiddleware from 'redux-promise'
const rootReducer = combineReducers({
	loginReducer,
})

const store = createStore(rootReducer,applyMiddleware(promiseMiddleware));
export default store;