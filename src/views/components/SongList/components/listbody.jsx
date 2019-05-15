//歌单的内容部分
import React from 'react';
import SvgIcon from '../../SvgIcon/svgicon.jsx'
import point from '@/assets/svg/point.svg'
class ListBody extends React.Component{
	constructor(props){
  		super(props);
	}
	render(){
		let {listData} = this.props;

		return(
			<div className ='listbody-wrapper'>
				<div className = 'listbody-imgbox'>
					<img className = 'listbody-bg' src = {listData.coverImgUrl}></img>
				</div>
				<div className = 'listbody-titbox'>
					<div className = 'listbody-tit'>{listData.name}</div>
				</div>
				<SvgIcon className = 'list-svg' src={point} svgStyle = {{width:20,height:20}}/>
			</div>
		)
	}
}

export default ListBody