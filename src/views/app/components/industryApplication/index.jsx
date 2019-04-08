import React, { Component } from 'react';
import './index.css';

class IndustryApplication extends Component {
  render() {
    return (
      <div className="industry-application">
        <div className="anchor" id="industryApplication"></div>
        <div className="text-box">
          <div className="text-title">行业应用</div>
          <div className="text-line"></div>
        </div>
        <div className="industryapp-content">
          <h5>有数适用于各类企业的互联⽹大数据平台搭建，企业能够结合自身业务快速建立网络口碑、市场分析体系</h5>
          <div className="industryapp-items">
            <div className="industryapp-item">
              <div className="icon-box"><i className="iconfont icon-huazhuangpin"></i></div>
              <h5>美妆</h5>
            </div>
            <div className="industryapp-item">
              <div className="icon-box"><i className="iconfont icon-baozhuanhuan"></i></div>
              <h5>奢侈品</h5>
            </div>
            <div className="industryapp-item">
              <div className="icon-box"><i className="iconfont icon-shizhuangyufuzhuang-"></i></div>
              <h5>时尚</h5>
            </div>
            <div className="industryapp-item">
              <div className="icon-box"><i className="iconfont icon-shoubiao"></i></div>
              <h5>腕表</h5>
            </div>
            <div className="industryapp-item">
              <div className="icon-box"><i className="iconfont icon-leimucuzhubao"></i></div>
              <h5>珠宝</h5>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default IndustryApplication;
