import React from 'react';
import './sidebar.less';
import bg from '@/assets/imgs/sidebar-bg.webp'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import $fetch from '@/api.js'
import SideBarImg from './components/sidebarimg.jsx'
class SideBar extends React.Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){

	}
	render(){
		let {showSide,toggleSide,userInfo,level} = this.props
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
										<SideBarImg bgStyle = {bgStyle} userInfo = {userInfo} level = {level}></SideBarImg>
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