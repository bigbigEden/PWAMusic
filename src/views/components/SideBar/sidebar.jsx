import React from 'react';
import './sidebar.less';
import bg from '@/assets/imgs/sidebar-bg.webp'
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
		console.log('test',uid);
		$fetch.getData(`/api/user/detail?uid=${uid}`)
		.then((res)=>{
			this.setState({
				userInfo:res.profile,
				level:res.level
			})
		})
	}
	render(){

		const bgStyle = {
			backgroundSize:'cover',
			backgroundImage:`url(${bg})`,
			backgroundPosition:'60%',
			backgroundRepeat:'no-repeat',
		}
		return(
			<div className = 'sidebar-wrapper'>
				<div className = 'sidebar-mask'></div>
				<SideBarImg bgStyle = {bgStyle} userInfo = {this.state.userInfo} level = {this.state.level}></SideBarImg>
				
			</div>
		)

	}
}
export default SideBar