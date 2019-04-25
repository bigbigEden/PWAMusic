//这里存放表单输入的组件
import React from 'react';
import './input.less';
import SvgIcon from '@/views/components/SvgIcon/svgicon.jsx'
import classnames from 'classnames';
import cancel  from '@/assets/svg/cancel.svg'
class Input extends React.Component{
	constructor(props){
  		super(props);
	}
	render(){
		const {type,svg,svgStyle,className,style,children,placeholder,svalue,name} = this.props;
		const {valueChange,cancelValue} = this.props;
		const input_class = classnames('myinput',className);
		return(
			<div className='myinput-box'>
				{
					svg?<SvgIcon className = 'myinput-svg' src={svg}></SvgIcon>
					:''
				}
				<input onChange = {valueChange.bind(this,name)} value={svalue} className = {input_class} style = {style} type = {type} name = {name} placeholder = {placeholder}>
				</input>
				{
					svalue?<SvgIcon onClick={cancelValue.bind(this,name)} name = {name} className = 'myinput-svg' src={cancel}></SvgIcon>
					:''
				}	

			</div>
		)
	}
}

export default Input