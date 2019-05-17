import React from 'react'
import actions from '@/store/actions.js'
import { connect } from 'react-redux';
import Input from '@/views/components/Input/input.jsx';
import Child from './child.jsx';

export const myContext = React.createContext('defalutValue');
class Index extends React.Component{
	constructor(props){
		super(props)
	}
	componentWillMount(){
	}
	render(){
		return(	
			<myContext.Provider value = '123'>
				<div className="test1">
					<Child/>
				</div>
			</myContext.Provider>
		)
	}
}
export default connect(	
	(state)=>{
		return {
			test:state
		}
	},
	{
		login2:actions.actionCreator
	})(Index)