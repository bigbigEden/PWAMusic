import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router,Route,Switch} from 'react-router-dom'
import VConsole from 'vconsole/dist/vconsole.min.js' //import vconsole
import './assets/css/reset.css'
import loginRouter from './views/login/login.jsx'
import homeRouter from './views/homepage/homepage.jsx'
// import indexRouter  from './views/index/index.jsx'
let vConsole = new VConsole();
ReactDOM.render(
	<Router>
		<Switch>
	    	<Route exact path="/" component={loginRouter}/>
	    	<Route path = '/homepage' component = {homeRouter}/>
	    </Switch>
	</Router>,
  document.getElementById('app')
);