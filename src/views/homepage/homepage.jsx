import React from 'react'
import './homepage.less'
import TopHead from '@/views/components/TopHead/tophead.jsx'
import SideBar from '@/views/components/SideBar/sidebar.jsx'
export default class HomePage extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div id = 'homepage' className = 'homepage'>
				<TopHead></TopHead>
				<SideBar></SideBar>
			</div>
		)
	}

}