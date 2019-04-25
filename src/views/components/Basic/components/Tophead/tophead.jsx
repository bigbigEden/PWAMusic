import React from 'react';
import './tophead.less';
import SvgIcon from '@/views/components/SvgIcon/svgicon.jsx'
import list from '@/assets/svg/list.svg'
import music from '@/assets/svg/music.svg'
import music_2 from '@/assets/svg/music_2.svg'
import player from '@/assets/svg/play.svg'
import search from '@/assets/svg/search.svg'
import classnames from 'classnames';
class TopHead extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		const {className,toggleSide} = this.props;
		let head_class = classnames('head-wrapper',className);
		return(
			<div className = {head_class}>
				<div onClick = {toggleSide} className = 'head-wrapper-left'>
					<SvgIcon className = 'head-svg' src={list}></SvgIcon>
				</div>
				<div className = 'head-wrapper-middle'>
					<SvgIcon svgStyle = {{height:26}} className = 'head-svg' src={music}></SvgIcon>
					<SvgIcon svgStyle = {{height:28}} className = 'head-svg' src={music_2}></SvgIcon>
					<SvgIcon svgStyle = {{height:28}} className = 'head-svg' src={player}></SvgIcon>
				</div>
				<div  className = 'head-wrapper-right'>
					<SvgIcon  svgStyle = {{height:25}} className = 'head-svg' src={search}></SvgIcon>
				</div>
			</div>
		)
	}

}

export default TopHead