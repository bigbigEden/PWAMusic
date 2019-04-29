import React from 'react';
import './sidebar.less';
import bg from '@/assets/imgs/sidebar-bg.webp'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import $fetch from '@/api.js'
import SideBarImg from './components/sidebarimg.jsx'
class SideBar extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			userInfo:{

			},
			level:''
		}
	}
	componentDidMount(){
		const uid = window.localStorage.getItem('uid');
		$fetch.getData(`/api/user/detail?uid=${uid}`)
		.then((res)=>{
			this.setState({
				userInfo:res.profile,
				level:res.level
			})
		})
	}
	render(){
		let {showSide,toggleSide} = this.props
		const bgStyle = {
			backgroundSize:'cover',
			backgroundImage:`url(${bg})`,
			backgroundPosition:'60%',
			backgroundRepeat:'no-repeat',
		}
		return(
			<div id ='sidebar-box'>
				<ReactCSSTransitionGroup 	
						transitionName="fade" 
						transitionEnterTimeout={200}
					    transitionLeaveTimeout={200}>
						{
							showSide?
								<div className = 'sidebar-wrapper-all'>
									<div className = 'sidebar-wrapper'>
										<SideBarImg bgStyle = {bgStyle} userInfo = {this.state.userInfo} level = {this.state.level}></SideBarImg>
									</div>
									<div onClick = {toggleSide} className = 'sidebar-mask'></div>
								</div>
							:''
						}
				</ReactCSSTransitionGroup>
			</div>
		)
	}
}
export default SideBar