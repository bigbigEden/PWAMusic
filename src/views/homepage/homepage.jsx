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
			playList:[[],[]],//歌单总数
			userInfo:{

			},
			dataFinsh:false,
			level:''
		}
	}
	componentWillMount(){
		this.getUserData();
	}
	checkList(list){
		let creatList = [];
		let saveList = [];
		list.map((item,index)=>{
			this.loadImg(item.coverImgUrl);
			item.subscribed?creatList.push(item):saveList.push(item);
		})
		this.setState({
			playList:[creatList,saveList]
		})
	}
	loadImg(url){
		var img = new Image();
		img.src = url;
	}
	getUserData(){
		let storage = window.localStorage
		let uid = storage.getItem('uid');
		Promise.all([this.getUserDetail(uid),this.getUserPlayList(uid)])
		.then(()=>{
			this.setState({
				dataFinsh:true
			})
		})

	}
	getUserPlayList(uid){
		return $fetch.getData(`/api/user/playlist?uid=${uid}`)
		.then((res)=>{
			this.checkList(res.playlist);
		})
	}
	getUserDetail(uid){
		return $fetch.getData(`/api/user/detail?uid=${uid}`)
		.then((res)=>{
			this.setState({
				userInfo:res.profile,
				level:res.level
			})
		})
	}
	render(){
		let state = this.state;
		let creatList = state.playList[1];//创建的歌单
		let saveList = state.playList[0];//收藏的歌单
		return(
				<div id = 'homepage' className = 'homepage'>
					{
						state.dataFinsh?
							<div>
								<Basic userInfo = {state.userInfo} level = {state.level} />
								<SongList number = {creatList.length} List = {creatList}></SongList>
								<SongList number = {saveList.length}  List = {saveList}></SongList>
							</div>
						:""
					}

				</div>
		)
	}
}
function mapStateToProps(state) {
  return {
    user: state
  }
}
export default connect(mapStateToProps)(HomePage)