import React, { Component } from 'react';
import TopNavigation from '../../components/topNavigation/index.jsx';
import Advantages from './components/advantages/index.jsx';
import Solution from './components/solution/index.jsx';
import IndustryApplication from './components/industryApplication/index.jsx';
import Contact from './components/contact/index.jsx';
import BottomText from '../../components/bottomText/index.jsx';
import api from '../../axios/api';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isPc: true, anchorId: 'youshu' };
  }
  componentDidMount() {
    this.changeWidth()
    window.addEventListener('resize', this.changeWidth.bind(this));
    window.addEventListener('scroll', this.onScroll.bind(this));
  }
  changeWidth() {
    var result = window.matchMedia('(max-width: 750px)');
    if (result.matches) {
      this.setState({ isPc: false })
      document.getElementsByClassName('banner')[0].style.backgroundImage = 'url(' + api.imgHost + '/images/banner_bg_phone.jpg)';
    } else {
      this.setState({ isPc: true })
      document.getElementsByClassName('banner')[0].style.backgroundImage = 'url(' + api.imgHost + '/images/banner_bg@3x.jpg)';
    }
  }
  scrollToAnchor = (anchorName) => {
    if (anchorName) {
      // this.setState({
      //   anchorId: anchorName
      // })
      let anchorElement = document.getElementById(anchorName);
      if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' }); }
    }
  }
  onScroll() {
    let scrolled = document.documentElement.scrollTop || document.body.scrollTop;
    // console.log(scrolled);

    if (scrolled >= 1800) {
      this.setState({
        anchorId: 'contact'
      })
    } else if (scrolled < 1800 && scrolled >= 1200) {
      this.setState({
        anchorId: 'industryApplication'
      })
    }
    else if (scrolled < 1200 && scrolled >= 600) {
      this.setState({
        anchorId: 'solution'
      })
    }
    else if (scrolled < 600 && scrolled >= 200) {
      this.setState({
        anchorId: 'advantages'
      })
    } else {
      this.setState({
        anchorId: 'youshu'
      })
    }

  }
  render() {
    return (
      <div className="main">
        <TopNavigation handleNavChange={this.scrollToAnchor.bind(this)} anchorId={this.state.anchorId}></TopNavigation>
        <div className="content-box">
          <div className="anchor" id="youshu"></div>
          <div className="banner">
            <h1>一款为品牌方打造的互联网大数据分析平台</h1>
            <h4>让每一个分析师都可以全面获取数据，敏捷分析结果，快速获取决策支持</h4>
          </div>
          <Advantages ></Advantages>
          <Solution isPc={this.state.isPc}></Solution>
          <IndustryApplication></IndustryApplication>
          <Contact ></Contact>
        </div>
        <BottomText></BottomText>
      </div >
    )
  }
}

export default App;
