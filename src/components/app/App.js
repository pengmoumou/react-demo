import React, { Component } from 'react';
import './App.css';
// import Demo from '../demo';
// import { Route } from 'react-router';

class App extends Component {
  render() {
    return (<div><div>this is my first react demo</div>
      {/* for Nested Routes by react-router 2.0 */}
      {/* <div>{this.props.children}</div> */}
      {/* for Nested Routes by react-router 4.0 */}
      {/* <Route path="/demo" component={Demo}></Route> */}
    </div>
    )
  }
}

export default App;
