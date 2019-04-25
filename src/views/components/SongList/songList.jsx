//歌单列表组件
import React from 'react';
import './songList.less';
import ListHead from './components/listhead.jsx'
import classnames from 'classnames';
class SongList extends React.Component{
	constructor(props){
  		super(props);
	}
	render(){
		let {className} = this.props;
		const song_class = classnames('songlist-wrapper',className);
		const title_class = classnames({
			'actived':this.state.actived
		})
		return(
			<div className = {song_class}>
				 <ListHead/>
			</div>
		)
	}
}

export default SongList