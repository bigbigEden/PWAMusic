const user = {
    uid:'',
    status:'offline'
}//存放user的状态

//这是action


//这是reducer
const reducer = (state = user , action) => {
    switch(action.type){
        case 'login':
           state.uid = window.localStorage.getItem('uid');
           state.status = 'login'
           return state
        default:
            return state
    }
}
export default reducer