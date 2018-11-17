import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './DetailInfo.css';
import {Table, Select, Row, Col, Tooltip} from 'antd'
import { Button } from 'antd/lib/radio';
import _ from 'lodash'
/**
 * 日期：2017/12/20
 * 入参：
 * dataSource: 角色-组件数据源
 *             格式-dataSource: {options: {}, datas: []}
 *                              options: 角色-组件配置项
 *                                       支持的配置属性-
 */
class DetailInfo extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    getData(dataSource={}) {
      let dataArr = []
      if(dataSource.datas) {
        for(let data of dataSource.datas) {
          if (data.key) {
            dataArr.push(data)
          }
        }
      }
      return dataArr
    }
    getOptions(dataSource={}) {
      return dataSource.options
    }
    getRenderDom(dataArr = []) {
      let renderCol = this.getOptions(this.props.dataSource)
      if (renderCol) {
        renderCol = renderCol.cols
      }
      let renderDom = []
      if(dataArr) {
        for(let data of dataArr) {
          renderDom.push(this.getDataType(data))
        }
      }
      console.warn( renderDom )
      return renderDom
    }
    getRenderTitle(title) {
      let renderTitle = ''
      if(title) {
        renderTitle = (
          <span style={{backgroundColor: '#eeeeee', width: '100%', display: 'inline-block'}}>{title}</span>
        )
      }
      return renderTitle
    }
    getDataType(data={}) {
      data.type = data.type || 'normal'
        switch (data.type) {
          case 'title' : { 
            return (
              <Col span={24}>
                <div style={{height: '30px', backgroundColor: '#eeeeee'}}>
                  <span title={data.titleName} style={{width: '100%', color: data.heighlight ? 'red' : 'black'}} >{data.titleName}</span>
                </div>
              </Col>
          )}; break;
          case 'normal' : { 
            return (
              <Col span={24/this.props.dataSource.options.cols}>
                <div style={{height: '30px'}}>
                  <span title={data.labelName} style={{width: this.props.dataSource.options.labelWidth ? this.props.dataSource.options.labelWidth : '15%', color: data.heighlight ? 'red' : 'black'}} className="span-data-label">{data.labelName}</span>
                  <span className='and-mark'>：</span>
                  <span title={data.value} style={{width: this.props.dataSource.options.valueWidth ? this.props.dataSource.options.valueWidth : '60%'}} className="span-data-value">{data.value}</span>
                </div>
              </Col>
          )}; break;
          case 'pic' : { 
            return (
              <Col span={24/this.props.dataSource.options.cols}>
                <span title={data.labelName} style={{display: 'inline-block', width: this.props.dataSource.options.labelWidth ? this.props.dataSource.options.labelWidth : '15%', color: data.heighlight ? 'red' : 'black'}} className="span-data-label">{data.labelName}</span>
                <span className='and-mark'>：</span>
                <span className="span-data-value">
                  <Tooltip placement='top' title={data.value}>
                    <Button size="small" title={data.value} className="show-pic-button">预览图片</Button>
                  </Tooltip>
                </span>
              </Col>
          )}; break;
          case 'link' : { 
            return (
              <Col span={24/this.props.dataSource.options.cols}>
                <span title={data.labelName} style={{display: 'inline-block', width: this.props.dataSource.options.labelWidth ? this.props.dataSource.options.labelWidth : '15%', color: data.heighlight ? 'red' : 'black'}} className="span-data-label">{data.labelName}</span>
                <span>：</span>
                <span className="span-data-value">
                <Tooltip placement='top' title={data.value}>
                  <Button size="small" title={data.value} className="show-pic-button">预览图片</Button>
                </Tooltip>
                </span>
              </Col>
          )}; break;
        }
    }
  render() {
    let userArray = [
      {name: 'aa', age: 11},
      {name: 'bb', age: 12},
      {name: 'cc', age: 13},
      {name: 'dd', age: 14},
      {name: 'ee', age: 15}
    ]
    _.times(3, (i) => {
      console.log(i, '123456')
    })
    let dataSource = this.props.dataSource
    let renderTitle = this.getRenderTitle(this.props.dataSource.options.title)
    return (
      <div style={{border: this.props.dataSource.options.border || '', padding: '10px'}}>
        {renderTitle}
        <Row> {this.getRenderDom(dataSource.datas)} </Row>
      </div>
    );
  }
}

export default DetailInfo;
