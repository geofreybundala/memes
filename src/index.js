import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/js/animate.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.min.css';
import { Route,  BrowserRouter as Router,Switch } from 'react-router-dom';

import Memes from './components/memes';
import Home from './components/home';


import * as serviceWorker from './serviceWorker';
const routing = (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/memes" component={Memes} />
        {/* <Route path component={Notfound}/> */}
      </Switch>
    </Router>
  )

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(routing , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
