import React from 'react'
import './homepage.less'
import $fetch from '@/api.js'
import Basic from '@/views/components/Basic/Basic.jsx'
import SongList from '@/views/components/SongList/songList.jsx'
export default class HomePage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			creatList:0,//创建的歌单
			saveList:0,//收藏的歌单
		}
	}
	componentWillMount(){
		$fetch.getData(`/api/user/subcount`)
		.then((res)=>{
			this.setState({
				creatList:res.createdPlaylistCount,
				saveList:res.subPlaylistCount,
			})
		})
	}
	render(){
		let state = this.state;
		return(
				<div id = 'homepage' className = 'homepage'>
					<Basic/>
					<SongList number = {state.creatList}></SongList>
					<SongList number = {state.saveList}></SongList>
				</div>
		)
	}
}