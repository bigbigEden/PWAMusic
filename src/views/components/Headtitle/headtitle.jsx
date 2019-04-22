import React from 'react';
import './headtitle.less'
import SvgIcon from '@/views/components/SvgIcon/svgicon.jsx'
class Headtitle extends React.Component{
	constructor(props){
  		super(props);
	}
	render(){
		const {src,children,back} = this.props;
		return(
			<div className = 'headtitle-box'>
				<SvgIcon src = {src} onClick = {back}></SvgIcon>
				{children}
			</div>
		)
	}
}

export default Headtitle