import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as actions from '@/store/loginStore/actions.js'
import {withRouter} from 'react-router-dom';
import './login.less'
import cx from 'classnames';
import bg from '@/assets/imgs/login-bg.jpg'
import Button from '../components/Button/button.jsx'
import $fetch from '@/api.js'
import LoginDetail from './components/logindetail.jsx'
import catcherr from '@/lib/err.js'
class Login extends React.Component{
	constructor(props){
		super(props);
		this.changeShow = this.changeShow.bind(this);
  		this.valueChange = this.valueChange.bind(this);
  		this.cancelValue = this.cancelValue.bind(this);
  		this.checkLogin = this.checkLogin.bind(this)
		this.state = {
			loginShow:false,
			password:'',
			mobile:'',
		}
	}
	componentWillMount(){
		let storage = window.localStorage;
		if(storage.getItem('uid') !=null){
			this.props.login();//触发
			this.props.history.push('homepage');
		}
	}
	checkLogin(){

		$fetch.sendData(`/api/login/cellphone?phone=${this.state.mobile}&password=${this.state.password}`)
		.then((res)=>{
			let storage = window.localStorage
			let status = catcherr(res);	
			if(status && storage){
				if(storage.getItem('uid') == null){
					storage.setItem('uid',res.account.id);
					this.props.login();//触发存入redux里
				}
				this.props.history.push('/homepage');
			}
		})
	}
	valueChange(type,e){
		if(e.target.value!=''){
			type == 'mobile'?
				this.setState({
						mobile:e.target.value
				})
			:   this.setState({
				password : e.target.value
			})
		}
		else{
			type == 'mobile'?
				this.setState({
					mobile:''
				})
			:   this.setState({
				password : ''
			})
		}
	}
	cancelValue(type,e){
		if(e.target.value!=''){
			type == 'mobile'?
				this.setState({
					mobile:''
				})
			:   this.setState({
				password : ''
			})
		}
	}
	changeShow(type){
		if(type == 'show'){
			this.setState({
				loginShow:true
			})
		}
		else{
			this.setState({
				loginShow:false
			})
		}
	}
	render(){
		const bgStyle = {
			height:'100vh',
			backgroundSize:'cover',
			backgroundImage:`url(${bg})`,
			backgroundPosition:'70% 30%',
			backgroundRepeat:'no-repeat',
		}
		let {loginShow,mobile,password} = this.state;
		return(		
			<div id = 'login-page'>
				<LoginDetail login = {this.props.login} checkLogin = {this.checkLogin} valueChange = {this.valueChange} cancelValue = {this.cancelValue} show = {loginShow} mobile = {mobile} password = {password} changeShow = {this.changeShow}></LoginDetail>
				<div style = {bgStyle} className = 'login-wrapper'>
					<div className = 'login-box'>
						<Button  type = 'normal' onClick = {this.changeShow.bind(this,'show')}>手机号登录</Button>
					</div>
				</div>	
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {
    user: state.loginReducer
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);