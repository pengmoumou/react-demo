import React, { Component } from 'react';
import { Router, Route, Redirect } from 'react-router';
import App from '../views/App';
import KolScreen from '../views/kol_monitor';
import FanCoincidence from '../views/fan_coincidence';
import KolMonitor from '../views/kol_monitor';

const createBrowserHistory = require("history").createBrowserHistory;

const history = createBrowserHistory();
class MyRouter extends Component {
  render() {
    return (<Router history={history}>
      {/* <div> */}
      <Route path="/" component={App} />
      <Route path="/screen" component={KolScreen} />
      <Route path="/coincidence" component={FanCoincidence} />
      <Route path="/monitor" component={KolMonitor} />
      <Redirect from="/" to="/screen" />
      {/* </div> */}
    </Router >)
  }
}
export default MyRouter;