import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider} from 'react-redux';
import store from './store/index.js'
import App from './app.js'
// import VConsole from 'vconsole/dist/vconsole.min.js' //import vconsole
import './assets/css/reset.css'
// let vConsole = new VConsole();
const store = createStore(reducer);
ReactDOM.render(
  <Provider store = {store}>
  	<App/>
  </Provider>,
  document.getElementById('app')
);