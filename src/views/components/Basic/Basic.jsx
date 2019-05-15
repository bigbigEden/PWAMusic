//这里存放页面基本架构，比如header,nav,sidebar和底部播放器等等
import React from 'react'
import TopHead from './components/TopHead/tophead.jsx'
import SideBar from './components/SideBar/sidebar.jsx'
export default class Basic extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			showSide:false,
		};
		this.toggleSidebar = this.toggleSidebar.bind(this);
	}
	toggleSidebar(){
		this.setState({
			showSide:!this.state.showSide
		})
	}
	render(){
		let {userInfo,level} = this.props
		let {showSide} = this.state;
		return(
			<div className = 'basic-wrapper'>
				<TopHead  toggleSide = {this.toggleSidebar}></TopHead>
				<SideBar  userInfo = {userInfo} level = {level} toggleSide = {this.toggleSidebar} showSide = {showSide}></SideBar>
			</div>
		)
	}

}