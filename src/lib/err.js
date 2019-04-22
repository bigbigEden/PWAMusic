function deal(res){
	alert(res)
}
export default function test(res){
	if(res.code == 502){
		deal('密码错误')
	}
	else if(res.code == 200){
		return true
	}
	else if(res.code == 501){
		deal('用户名不存在')
	}
	else if(res.code == 400){
		deal('未知错误')
	}
}
