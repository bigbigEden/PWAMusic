//这里存放一个普通的头部字段
import React from 'react';
import classnames from 'classnames';
import SvgIcon from '@/views/components/SvgIcon/svgicon.jsx'
class Headtitle extends React.Component{
	constructor(props){
  		super(props);
	}
	render(){
		const {src,children,back,onClick,className} = this.props;
		let head_class = classnames('headtitle-box',className);
		return(
			<div onClick = {onClick} className = {head_class}>
				{
					src?
					<SvgIcon src = {src} onClick = {back}></SvgIcon>
					:''
				}
				
				{children}
			</div>
		)
	}
}

export default Headtitle