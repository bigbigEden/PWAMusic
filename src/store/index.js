import loginReducer from './loginStore/reducer.js'
import {combineReducers, createStore} from "redux";

const rootReducer = combineReducers({
	loginReducer,
})

const store = createStore(rootReducer);
export default store;