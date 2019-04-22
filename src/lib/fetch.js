class _fetch{
	constructor(){
		var _self = this;
		this.inter_req = []; 
		this.inter_res = [];
		this.interceptors = {
			request:{
				use:function(callback){
					_self.inter_req.push(callback)
				}
			},
			response:{
				use:function(callback){
					_self.inter_res.push(callback)
				}
			}
		}
	}
	checkRes(res,type){
		if(type == 'JSON'){
			return res.json()
		}
	}
	fetchAll(url,init,type='JSON'){
		if(this.inter_req.length !=0){
			this.inter_req.map((item)=>{
				init = item(init)
			})
		}
		return new Promise((resolve,reject)=>{
			fetch(url,init)
				.then((res)=>{
					if(res.ok){
						if(this.inter_res.length!=0){
							this.inter_res.map((item)=>{
								res = item(res)
							})
						}
						res = this.checkRes(res,type);
						console.log(res);
						resolve(res)
					}
					else{
						reject(err)
					}
				})
			})
	}
	addInterReq(cb){
		this.interceptors.request.use(cb)
	}
	addInterRes(cb){
		this.interceptors.response.use(cb)
	}
}
export default new _fetch()