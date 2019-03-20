import React, { Component } from 'react';
import TopNavigation from '../../components/topNavigation'
import './App.css';

class App extends Component {
  render() {
    return (<div className="main"><TopNavigation>this is my first react demo</TopNavigation>
    </div>
    )
  }
}

export default App;
