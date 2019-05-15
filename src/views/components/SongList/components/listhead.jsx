//歌单的头部字段组件
import React from 'react';
import classnames from 'classnames';
import left from '@/assets/svg/arrow-left.svg'
import point from '@/assets/svg/point.svg'
import add from '@/assets/svg/add.svg'
import SvgIcon from '@/views/components/SvgIcon/svgicon.jsx'
class ListHead extends React.Component{
	constructor(props){
  		super(props);
	}
	render(){
		let {onClick,actived,number} = this.props
		
		let list_class = classnames({
			'listhead-arrow':true,
			'actived':actived
		})
		return(
			<div className ='listhead-wrapper' onClick = {onClick}>
				<div className = 'listhead-title-box'>
					<span className = {list_class}>
						<SvgIcon className = 'list-svg' src={left} svgStyle= {{width:20,height:20}}/>
					</span>
					<span className = 'listhead-title'>创建的歌单</span>
					<span className = 'listhead-number'>({number})</span>
				</div>
				<div className = 'listhead-point-box'>
					<SvgIcon className= 'list-svg' src={add} svgStyle = {{width:20,height:20}}/>
					<SvgIcon className = 'list-svg' src={point} svgStyle = {{width:20,height:20}}/>
				</div>
			</div>
		)
	}
}

export default ListHead