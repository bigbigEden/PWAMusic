//歌单列表组件
import React from 'react';
import './songList.less';
import ListHead from './components/listhead.jsx'
import ListBody from './components/listbody.jsx'
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
		let {className,number,List} = this.props;
		const song_class = classnames('songlist-wrapper',className);
		const list_class = classnames({
			'listbody-wrapperbox':true,
			'actived':this.state.actived
		})
		return(
			<div className = {song_class}>
				<ListHead number = {number} onClick = {this.showList} actived = {this.state.actived}/>
				<div className = {list_class}>
			 		{
			 			List.map((item,index)=>{
				 			return	<ListBody  listData = {item} key = {index}></ListBody>
			 			})
				 	}
		        </div>
			</div>
		)
	}
}

export default SongList