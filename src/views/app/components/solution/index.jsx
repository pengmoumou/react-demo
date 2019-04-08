import React, { Component } from 'react';
import api from '../../../../axios/api';
import './index.css';

class Solution extends Component {
  componentWillReceiveProps(nextProps) {
    if (!nextProps.isPc) {
      document.getElementsByClassName('solution-item')[0].style.backgroundImage = 'url(' + api.imgHost + '/images/solution_bg_phone1.jpg)';
      document.getElementsByClassName('solution-item')[1].style.backgroundImage = 'url(' + api.imgHost + '/images/solution_bg_phone2.jpg)';
      document.getElementsByClassName('solution-item')[2].style.backgroundImage = 'url(' + api.imgHost + '/images/solution_bg_phone3.jpg)';
    } else {
      document.getElementsByClassName('solution-item')[0].style.backgroundImage = 'none';
      document.getElementsByClassName('solution-item')[1].style.backgroundImage = 'none';
      document.getElementsByClassName('solution-item')[2].style.backgroundImage = 'none';
    }

  }
  render() {

    return (
      <div className="solution-box">
        <div className="anchor" id="solution"></div>
        <div className="text-box">
          <div className="text-title">解决方案</div>
          <div className="text-line"></div>
        </div>
        <div className="solution-content">
          <div className="solution-items" style={{ backgroundImage: 'url(' + api.imgHost + '/images/solution_bg@3x.jpg)' }}>
            <div className="solution-item">
              <p><i className="iconfont icon-ziliaoduibi"></i></p>
              <h5>竞品分析</h5>
              <p>为客户提供全面的竞争分析，实时监控竞品全品类互联网数据，呈现客户和竞品之间的多维度指标对比，让客户随时随地可以了解竞争情况</p>
            </div>
            <div className="solution-item">
              <p><i className="iconfont icon-yanjiufangfa"></i></p>
              <h5>自定义研究</h5>
              <p>客户可以随时⾃定义新建数据分析任务， 快速了解市场情况、舆论动向，消费者 的行为喜好。</p>
            </div>
            <div className="solution-item">
              <p><i className="iconfont icon-gexingdingzhi"></i></p>
              <h5>数据产品定制</h5>
              <p>按客户需求，定制开发包括互联网大数据 口碑情感分析、谈论焦点分析、数据可视化、 新渠道数据源分析指标建立等</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Solution;
