import ajax from './lib/fetch.js'
ajax.addInterReq((init)=>{
  if (window.sessionStorage && window.localStorage) {
    if (sessionStorage.token || localStorage.token) {
      init.headers['token'] = sessionStorage.token || localStorage.token
    }
  }
  return init 
})
class Api{
	static async test(){
		const promise = new Promise((resolve,reject)=>{
			setTimeout(()=>{
				console.log('yes');
				resolve('hello')
			},1000)
		})
		return promise
	}
	static async getData(url,init = {method:'GET'},type = 'JSON'){
		return ajax.fetchAll(url,init,type)
	}
	static async sendData(url,init = {method:'POST'},type = 'JSON'){
		return ajax.fetchAll(url,init,type)
	}
}

export default Api