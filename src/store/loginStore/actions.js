import { createAction } from 'redux-actions';

export const login = createAction('login',()=>{
	const uid = window.localStorage.getItem('uid');
	return {
		uid,
		status:'online',
	}
})
