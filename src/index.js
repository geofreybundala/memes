import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/js/animate.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.min.css';
import { Route,  BrowserRouter as Router,Switch } from 'react-router-dom';

import Memes from './components/memes';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

 const store = createStore(reducers,applyMiddleware(thunk));


const routing = (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/memes" component={Memes} />
        {/* <Route path component={Notfound}/> */}
      </Switch>
    </Router>
  )

ReactDOM.render(
  <Provider store={store}>
    {routing} 
  </Provider>
  , document.getElementById('root'));

