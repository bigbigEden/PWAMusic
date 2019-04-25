//歌单的头部字段组件
import React from 'react';
import classnames from 'classnames';
import left from '@/assets/svg/arrow-left.svg'
import SvgIcon from '@/views/components/SvgIcon/svgicon.jsx'
class ListHead extends React.Component{
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
		let list_class = classnames({
			'listhead-arrow':true,
			'actived':this.state.actived
		})
		return(
			<div className ='listhead-wrapper' onClick = {this.showList}>
				<span className = {list_class}>
					<SvgIcon src={left}/>
				</span>
			</div>
		)
	}
}

export default ListHead