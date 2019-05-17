import { handleAction } from 'redux-actions'
const user = {
    uid:'',
    status:'offline'
}//存放user的状态

const reducer = handleAction('login',(state, {payload}) => {
	const mystate = Object.assign({},state,payload);
	return mystate
},user)

export default reducer