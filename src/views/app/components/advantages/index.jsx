import React, { Component } from 'react';
import './index.css';

class Advantages extends Component {
  render() {
    return (
      <div className="advantages-box" >
        <div className="anchor" id="advantages"></div>
        <div className="text-box">
          <div className="text-title">我们的优势</div>
          <div className="text-line"></div>
        </div>
        <div className="advantages-content">
          <div className="advantages-item">
            <h5><i className="iconfont icon-iconset0357"></i>获取全面数据</h5>
            <p>监控全网120+⽹站、App，包括目前最火热的核心互联网平台如微博、微信、小红书等提供各平台原始数</p>
          </div>
          <div className="advantages-item">
            <h5><i className="iconfont icon-tiyanjiankong"></i>有效市场监控</h5>
            <p>全⾯监测品牌、品类的互联网声量，多品牌、多品类对比分</p>
          </div>
          <div className="advantages-item">
            <h5><i className="iconfont icon-faxian"></i>快速洞察市场</h5>
            <p>快速洞察消费者诉求和偏好</p>
            <p>⽀持⾃定义目标品牌、品类、事件的数据需求</p>
          </div>
          <div className="advantages-item">
            <h5><i className="iconfont icon-data-analysis"></i>一站式敏捷分析</h5>
            <p>从数据采集、过滤，到数据处理、分析、统计和挖掘，再到终端可视化，对数据进行全价值链管理</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Advantages;
