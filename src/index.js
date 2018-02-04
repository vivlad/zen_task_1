import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import App from './App';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login'
      }}/>
    )
  )}/>
)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/about/" component={About}/>
      <Route path="/login/" render={(props) => (<Login {...props} auth={fakeAuth} />)}/>
      <PrivateRoute path="/dashboard/" component={Dashboard} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
