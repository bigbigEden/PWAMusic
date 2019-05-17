import React from 'react';
import { HashRouter as Router,Route,Switch} from 'react-router-dom'
import loginRouter from './views/login/login.jsx'
import homeRouter from './views/homepage/homepage.jsx'
function App(){
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={loginRouter}/>
		    	<Route path = '/homepage' component = {homeRouter}/>
		    </Switch>
		</Router>
	)
}
export default App