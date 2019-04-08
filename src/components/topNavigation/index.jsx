import React, { Component } from 'react';
import api from '../../axios/api'
import './index.css';

class TopNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorId: this.props.anchorId
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      anchorId: nextProps.anchorId
    })
  }
  changeMenu(anchorId) {
    // if (anchorId !== this.state.anchorId) {
    //   this.setState({
    //     anchorId
    //   })
    // }
    this.props.handleNavChange(anchorId)
  }
  goMaxfun() {
    window.open('http://maxfun.ai');
  }
  login() {
    window.open('http://youshuplus.maxfun.co/');
  }
  render() {
    return (<div className="top-navigation">
      <div className="navigation-content">
        <div className="icon-box">
          <img src={api.imgHost + '/images/maxfun_logo@3x.png'} className="maxfun-icon" alt="" onClick={this.goMaxfun.bind(this)}></img>
          <img src={api.imgHost + '/images/youshu_logo@3x.png'} alt="" onClick={this.changeMenu.bind(this, 'youshu')}></img>
        </div>
        <ul className="menu" >
          <li onClick={this.changeMenu.bind(this, 'advantages')} className={this.state.anchorId === 'advantages' ? "active" : null}>优势</li>
          <li onClick={this.changeMenu.bind(this, 'solution')} className={this.state.anchorId === 'solution' ? "active" : null}>解决方案</li>
          <li onClick={this.changeMenu.bind(this, 'industryApplication')} className={this.state.anchorId === 'industryApplication' ? "active" : null}>行业应用</li>
          <li onClick={this.changeMenu.bind(this, 'contact')} className={this.state.anchorId === 'contact' ? "active" : null}>联系方式</li>
        </ul>
        <div className="login-btn">
          <button onClick={this.login.bind(this)}>登录</button>
        </div>
      </div>
    </div >

    )
  }
}

export default TopNavigation;
