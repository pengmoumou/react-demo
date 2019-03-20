import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from "history/createBrowserHistory";
import App from '../views/app/App';

const history = createBrowserHistory();
class MyRouter extends Component {
  render() {
    return (<Router history={history}>
      <div>
        <Route path="/" component={App} />
      </div>
    </Router>)
  }
}
export default MyRouter;