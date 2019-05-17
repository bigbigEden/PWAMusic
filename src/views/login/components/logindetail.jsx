import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import lock from '@/assets/svg/lock.svg';
import phone from "@/assets/svg/phone.svg";
import left from '@/assets/svg/arrow-left.svg'
import Button from '../../components/Button/button.jsx'
import Input from '../../components/Input/input.jsx'
import Headtitle from '../../components/Headtitle/headtitle.jsx'
export default class LoginDetail extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		let {changeShow,mobile,password,show} = this.props
		let {valueChange,cancelValue,checkLogin} = this.props
		return (
			<div>
				<ReactCSSTransitionGroup
		          transitionName="fade"
		          transitionEnterTimeout={300}
		          transitionLeaveTimeout={300}>
					{
						show?
							<div className ={`login-detail`}>
								<Headtitle back = {changeShow.bind(this,'not')} src={left}>手机号登录</Headtitle>
								<div className = 'login-detail-wrapper'>
									<div className = 'login-detail-input'>
										<Input valueChange = {valueChange} cancelValue = {cancelValue}  svalue = {mobile} cancelsvalue = {mobile} svg = {phone} type='test' placeholder = '请输入手机号' name ='mobile'></Input>
										<Input valueChange = {valueChange} cancelValue = {cancelValue} svalue = {password} svg = {lock} type='password' placeholder = '请输入密码' name ='password'></Input>
									</div>
									<div className = 'login-detail-button'>
										<Button type = 'inner' onClick = {checkLogin}>登录</Button>
									</div>
								</div>
							</div>
						:''
					}
        		</ReactCSSTransitionGroup>
			</div>

		)
	}

}