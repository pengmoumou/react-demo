import React, { Component } from 'react';
import axios from '../../../../axios';
import api from '../../../../axios/api'
import './index.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      company_name: '',
      phone: '',
      email: '',
      msg: '',
      isSubmit: false,
      btn_text: '立即提交，获取资料'
    };
  }
  componentDidUpdate() {
    if (this.state.isSubmit) {
      document.getElementsByClassName('submit-btn')[0].style.background = '#999';
    } else {
      document.getElementsByClassName('submit-btn')[0].style.background = '#00A4FF';
    }
  }
  handelChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
    // console.log(this.state)
  }
  submit() {
    if (this.state.isSubmit) {
      // alert('提交中，不能重复提交');
      return;
    }
    let data = {
      name: this.state.name,
      company_name: this.state.company_name,
      phone: this.state.phone,
      email: this.state.email,
      msg: this.state.msg
    }
    let flag = true;
    Object.keys(data).map(key => {
      if (!data[key]) {
        flag = false;
      }
      return flag;
    })
    let email = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
    let number = /^\d{11}$/;
    if (flag) {
      if (number.test(data.phone)) {
        if (email.test(data.email)) {
          this.setState({
            isSubmit: true,
            btn_text: '提交中…'
          });
          axios.rpc(api.business_contacts, data).then(res => {
            this.setState({
              name: '',
              company_name: '',
              phone: '',
              email: '',
              msg: '',
              isSubmit: false,
              btn_text: '立即提交，获取资料'
            });

            alert('提交成功，我们会尽快与您取得联系。');
            // console.log(res);
          }).catch(() => {
            this.setState({
              isSubmit: false,
              btn_text: '立即提交，获取资料'
            })
          })
        } else {
          alert("请填写正确的邮箱格式!!!");
        }
      } else {
        alert("请填写正确的手机号码格式!!!");
      }
    } else {
      alert('请填写所有内容!!!');
    }
  }
  render() {
    return (
      <div className="contact-box" >
        <div className="anchor" id="contact"></div>
        <div className="contact-content">
          <div className="content-left">
            <div className="team">
              <h2>团队介绍</h2>
              <h5>深圳市一满乐科技有限公司</h5>
              <p>一家核⼼心团队来⾃自美国硅⾕， 为企业级客户提供互联网大数据处理、 数据分析、机器学习服务的科技公司</p>
            </div>
            <div className="contact-way">
              <h2>联系</h2>
              <p>行政总机:0755-66852221 </p>
              <p>市场合作:0755-66853331 </p>
              <p>联系邮箱:info@maxfun.co</p>
              <p>办公地址：深圳市南山区海天一路 19号软件产业基地4A#1101</p>
            </div>
          </div>
          <div className="content-right">
            <h2>进一步了解有数</h2>
            <h5>如需进一步了解有数，请填写以下有关信息，我们会尽快安排工作人员与您联系，帮助您快速建立企业方案</h5>
            <div className="contact-form">
              <div className="form-items">
                <div className="form-item"><p>姓名 <input type="text" name="name" value={this.state.name} onChange={this.handelChange.bind(this)}></input></p></div>
                <div className="form-item"><p>电话 <input type="text" name="phone" value={this.state.phone} onChange={this.handelChange.bind(this)}></input></p></div>
              </div>
              <div className="form-items">
                <div className="form-item"><p>公司 <input type="text" name="company_name" value={this.state.company_name} onChange={this.handelChange.bind(this)}></input></p></div>
                <div className="form-item"><p>邮箱 <input type="text" name="email" value={this.state.email} onChange={this.handelChange.bind(this)}></input></p></div>
              </div>
              <div className="form-item">
                <textarea placeholder="  您希望通过有数解决什么需求？" name="msg" value={this.state.msg} onChange={this.handelChange.bind(this)}></textarea>
              </div>
              <div className="form-btn">
                <button onClick={this.submit.bind(this)} className='submit-btn'>{this.state.btn_text}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
