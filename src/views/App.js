import React from 'react';
import './App.css';
// import { Button } from 'element-react';
// import 'element-theme-default';
import LeftMenu from './components/left_menu';
import TopNav from './components/top_nav';

function App(props) {
  return (
    <div className="App">
      <TopNav></TopNav>
      <LeftMenu></LeftMenu>
      {props.children}
    </div>
  );
}

export default App;
