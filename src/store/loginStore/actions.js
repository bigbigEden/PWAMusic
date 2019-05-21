import { createAction } from 'redux-actions';
import $fetch from '@/api.js'
export const login = createAction('login',()=>{
	// const uid = window.localStorage.getItem('uid');
	return $fetch.getData('/api/test')
	// return {
	// 	uid,
	// 	status:'online',
	// }
})
