import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './PractiseStyle.css';
import {Table, Select, Row, Col, Tooltip} from 'antd'
import { Button } from 'antd/lib/radio';

class PractiseStyle extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
  render() {
    return (
      <div className="wrap-div">
        <div className="innerbox-div">
          <div className="pic-div">
            <img className="img-size" src="http://www.taopic.com/uploads/allimg/140729/240450-140HZP45790.jpg" alt="我的图片"/>
          </div>
          <div className="text-div">
              <div className="two-line-div">
              <p className="two-line-p">惊爆价！独享接送服务！唐风日式泡池～珠海御温泉度假村+不限次温泉</p>
              </div>
              <div className="one-line-div">
              <span className="one-line-span">1晚住宿</span>
              <span className="one-line-span">4星住宿</span>
              </div>
              <div className="price-div">
              1111111111
              </div>
            </div>
        </div>
        <div className="innerbox-div">
          <div className="pic-div">
            <img className="img-size" src="http://www.taopic.com/uploads/allimg/140729/240450-140HZP45790.jpg" alt="我的图片"/>
          </div>
          <div className="text-div">
              <span className="text-span">
              2222222
              </span>
            </div>
        </div>
        <div className='to-be-center' style={{ backgroundColor: '#eeeeee', height: '200px', width: '250px', verticalAlign: 'middle'}}>
            <div style={{ display: 'inline-block', backgroundColor: 'red', verticalAlign: 'middle', width: '210px'}}>
              壶咖啡洛杉矶开发商房价快速了解弗拉索夫就开始减肥快速的减肥了解了解雷锋精神快乐
              <p>这里是块级元素p的内容</p>
              <div>这里是块级元素div的内容</div>
            </div>
        </div>
        <br/>
        <div className='to-flex-center' style={{ backgroundColor: '#eeeeee', height: '200px', width: '250px'}}>
            <div style={{ display: 'inline-block', backgroundColor: 'red', verticalAlign: 'middle', width: '210px'}}>
              壶咖啡洛杉矶开发商房价快速了解弗拉索夫就开始减肥快速的减肥了解了解雷锋精神快乐
              <p>这里是块级元素p的内容</p>
              <div>这里是块级元素div的内容</div>
            </div>
        </div>
        <br/>
        <div className='to-position-center' style={{ backgroundColor: '#eeeeee', height: '200px', width: '250px'}}>
            <div className="position-inner-div" tyle={{ display: 'inline-block', backgroundColor: 'red', verticalAlign: 'middle', width: '210px'}}>
              壶咖啡洛杉矶开发商房价快速了解弗拉索夫就开始减肥快速的减肥了解了解雷锋精神快乐
              <p>这里是块级元素p的内容</p>
              <div>这里是块级元素div的内容</div>
            </div>
        </div>
        <div className="wei-lei-test">
          <p class="p-tag">这里是p标签</p>
          <div></div>
        </div>
        <div class="hanjie">
          <span>敬请期待</span>
        </div>
      </div>
        
    );
  }
}

export default PractiseStyle;
