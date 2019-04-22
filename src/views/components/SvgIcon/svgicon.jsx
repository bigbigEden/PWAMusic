import React from 'react';
import ReactSVG from 'react-svg'

export default class SvgIcon extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		const {src,wrapper = 'span',onClick,className,svgStyle} = this.props;
		const myStyle = Object.assign({},{width:40,height:20,cursor:'pointer'},svgStyle)
		return(
			<ReactSVG src={src} onClick = {onClick} wrapper = {wrapper} className = {className} svgStyle = {myStyle} src={src}></ReactSVG>
		)
	}
}

