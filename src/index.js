import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import PrivateRoute from './auth/PrivateRoute';
import Predict from './components/Predict';
import Result from './components/Result';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <Router>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/home" component={App} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/signin" component={Signin} exact />
        {/* <PrivateRoute path="/predict" component={Predict} exact /> */}
        <Route path="/predict" component={Predict} exact />
        <Route path="/result" component={Result} exact />
      </Switch>
    </Router>
  </RecoilRoot>
);
