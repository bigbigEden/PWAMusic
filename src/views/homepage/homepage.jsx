import React from 'react'
import './homepage.less'
import $fetch from '@/api.js'
import Basic from '@/views/components/Basic/Basic.jsx'
import SongList from '@/views/components/SongList/songList.jsx'
import { connect } from 'react-redux';
class HomePage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			creatList:0,//创建的歌单
			saveList:0,//收藏的歌单
			
		}
	}
	componentWillMount(){
		let storage = window.localStorage
		let uid = storage.getItem('uid');
		$fetch.getData(`/api/user/detail?uid=${uid}`)
		.then((res)=>{

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
function mapStateToProps(state) {
  return {
    user: state
  }
}
export default connect(mapStateToProps)(HomePage);