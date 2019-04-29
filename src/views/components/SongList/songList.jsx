//歌单列表组件
import React from 'react';
import './songList.less';
import ListHead from './components/listhead.jsx'
import classnames from 'classnames';
class SongList extends React.Component{
	constructor(props){
  		super(props);
  		this.showList = this.showList.bind(this);
  		this.state = {
  			actived:false
  		}  	
	}
	showList(){
		this.setState({
			actived:!this.state.actived
		})
	}
	render(){
		let {className,number} = this.props;
		
		const song_class = classnames('songlist-wrapper',className);
		return(
			<div className = {song_class}>
				 <ListHead number = {number} onClick = {this.showList} actived = {this.state.actived}/>
			</div>
		)
	}
}

export default SongList