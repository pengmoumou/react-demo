import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from "history/createBrowserHistory";
import App from '../components/app/App';
import Demo from '../components/demo/index';

const history = createBrowserHistory();
class MyRouter extends Component {
  render () {
    return (<Router history={history}>
      <div>
        <Route path="/" component={App} />
        <Route path="/demo" component={Demo} />
        {/* The secondary routing */}
        <Route path="/demo/demo0" component={Demo} />
      </div>
      {/* for Nested Routes by react-router 2.0 */}
      {/* <Route path="/" component={App}>
        <IndexRoute component={Demo} />
        <Route path="/demo" component={Demo}></Route>
      </Route> */}
      {/* <Route path="/" component={App} /> */}
    </Router>)
  }
}
// console.log(history);
export default MyRouter;