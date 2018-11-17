import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './PriceDate.css';
import {Table, Select, Row, Col, Tooltip, Input, Form, DatePicker, Button} from 'antd'
import $ from 'jquery';
import moment from 'moment';

const MonthPicker = DatePicker.MonthPicker;
const Option = Select.Option;
/**
 * 日期：2018/07
 * 现有状况是 点击 查询数据的时候  切换月份。 可以成功。
 * 存在问题： 
 * 1 datepicker用的是 moment的数据，故无法真实选择。
 * 2 月份牌可能存在6行或者4行的情况， 需要做样式兼容
 *                                  ---------7月10日晚上
 * 待完成工作：
 * 1 input框做校验
 * 2 日历展示框 做宽度限制
 * 3 第一个月第一天 有bug
 */
class PriceDate extends Component {
    constructor(props) {
      super(props);
      this.state = {
        price: '',
        stock: '',
        currentCoor: '', // 当前修改哪天的数据 状态保存
        timeItemState: { // 有关日期的状态管理
            firstMonth: new Date().getFullYear() + '-' + (new Date().getMonth() + 1),        // 第一个月份
            firstMonthCoor: 3,     // 第一个月 第一天在页面第一行的位置
            firstMonthEle: 0,     // 第一个月 第一天是dataArr数组中第几个数据
            numOfFirstMonth: 30,   // 第一个月 共多少天
            secondMonth: new Date().getFullYear() + '-' + (new Date().getMonth() + 2),     // 第二个月份
            secondMonthCoor: 1,    // 第二个月份  第一天在页面第一行的位置
            firstMonthEle: 30,    // 第二个月 第一天是dataArr数组中第几个数据
            numOfSecondMonth: 31,   // 第er个月 共多少天
            secondMonthEle: 30,
        }
    };
    this.dataArr = [
        {date: '1',price: '1000',stock: '50'},
        {date: '2',price: '1000',stock: '50'},
        {date: '3',price: '1000',stock: '50'},
        {date: '4',price: '1000',stock: '50'},
        {date: '5',price: '1000',stock: '50'},
        {date: '6',price: '1000',stock: '50'},
        {date: '7',price: '1000',stock: '50'},
        {date: '8',price: '1000',stock: '50'},
        {date: '9',price: '1000',stock: '50'},
        {date: '10',price: '1000',stock: '50'},
        {date: '11',price: '1000',stock: '50'},
        {date: '12',price: '1000',stock: '50'},
        {date: '13',price: '1000',stock: '50'},
        {date: '14',price: '1000',stock: '50'},
        {date: '15',price: '1000',stock: '50'},
        {date: '16',price: '1000',stock: '50'},
        {date: '17',price: '1000',stock: '50'},
        {date: '18',price: '1000',stock: '50'},
        {date: '19',price: '1000',stock: '50'},
        {date: '20',price: '1000',stock: '50'},
        {date: '21',price: '1000',stock: '50'},
        {date: '22',price: '1000',stock: '50'},
        {date: '23',price: '1000',stock: '50'},
        {date: '24',price: '1000',stock: '50'},
        {date: '25',price: '1000',stock: '50'},
        {date: '26',price: '1000',stock: '50'},
        {date: '27',price: '1000',stock: '50'},
        {date: '28',price: '1000',stock: '50'},
        {date: '29',price: '1000',stock: '50'},
        {date: '30',price: '1000',stock: '50'}, 
        {date: '31',price: '1000',stock: '50'}, 
        {date: '1',price: '1000',stock: '33'},
        {date: '2',price: '1000',stock: '33'},
        {date: '3',price: '1000',stock: '33'},
        {date: '4',price: '1000',stock: '33'},
        {date: '5',price: '1000',stock: '33'},
        {date: '6',price: '1000',stock: '33'},
        {date: '7',price: '1000',stock: '33'},
        {date: '8',price: '1000',stock: '33'},
        {date: '9',price: '1000',stock: '33'},
        {date: '10',price: '1000',stock: '33'},
        {date: '11',price: '1000',stock: '33'},
        {date: '12',price: '1000',stock: '33'},
        {date: '13',price: '1000',stock: '33'},
        {date: '14',price: '1000',stock: '33'},
        {date: '15',price: '1000',stock: '33'},
        {date: '16',price: '1000',stock: '33'},
        {date: '17',price: '1000',stock: '33'},
        {date: '18',price: '1000',stock: '33'},
        {date: '19',price: '1000',stock: '33'},
        {date: '20',price: '1000',stock: '33'},
        {date: '21',price: '1000',stock: '33'},
        {date: '22',price: '1000',stock: '33'},
        {date: '23',price: '1000',stock: '33'},
        {date: '24',price: '1000',stock: '33'},
        {date: '25',price: '1000',stock: '33'},
        {date: '26',price: '1000',stock: '33'},
        {date: '27',price: '1000',stock: '33'},
        {date: '28',price: '1000',stock: '33'},
        {date: '29',price: '1000',stock: '33'},
        {date: '30',price: '1000',stock: '33'},   
        {date: '31',price: '1000',stock: '33'},     
    ]
    }
    // 根据初始月份 计算两个月的状态 即 timeItemState（）
    changeTimeState (firstMonth = '2018-7') {
        let timeItemState = {}
        let daysMap = {
            1: '31', 2: '30', 4: '30', 5: '31', 6: '30',
            7: '31', 8: '31', 9: '30', 10: '31', 11: '30', 12: '31'
        }
        let _num1 = daysMap[+firstMonth.slice(5)]
        timeItemState.numOfFirstMonth = _num1 // 第一个月 共多少天
        let _num2 = daysMap[(+firstMonth.slice(5)) + 1]
        timeItemState.numOfSecondMonth = _num2 // 第er个月 共多少天
        let weekMap = {
            0: '7', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6'
        }
        let firstDay = new Date(firstMonth).getDay()
        timeItemState.firstMonthCoor = weekMap[firstDay]             // 第一个月 第一天在页面第一行的位置
        timeItemState.firstMonthEle = 0                              // 第一个月 第一天是dataArr数组中第几个数据
        let secondMonth = firstMonth.slice(0, 5) + ((+firstMonth.slice(5)) + 1)
        let secondDay = new Date(secondMonth).getDay()
        console.log(secondDay, 'secondDay----')
        timeItemState.secondMonthCoor = weekMap[secondDay]           // 第二个月 第一天在页面第一行的位置
        timeItemState.secondMonthEle = (+_num1)                  // 第er个月 第一天是dataArr数组中第几个数据
        return timeItemState
    }
    queryData () {
        console.log(this.props.form.getFieldsValue().timearea, 'this.props.form.getFieldsValue().stock')
        let timeItemState = {
            firstMonth: '2018-8',
            secondMonth: '2018-9'
        }
        this.setState({timeItemState})
    }
    fetchData() {
    }
    handleSubmit () {}
    changedPrice () {
        // 实时监控修改的价格数值
        let currPrice = this.props.form.getFieldsValue().price
        // 修改源数据中的价格
        this.state.currentCoor && (this.dataArr[this.state.currentCoor].price = currPrice)
        this.state.currentCoor && console.log(this.dataArr[this.state.currentCoor])
    }
    changedStock () {
        // 实时监控修改的价格数值
        let currStock = this.props.form.getFieldsValue().stock
        console.log(currStock, 'currStock')
        console.log(this.state.currentCoor, 'this.state.currentCoor')
        // 修改源数据中的价格
        this.state.currentCoor && (this.dataArr[this.state.currentCoor].stock = currStock)
    }
    // 循环push每个月的数据
    renderAMonth(type = '1', timeItemState) {
      let aMonthDays = []
      console.log(timeItemState, 'renderAMonth 中的  this.timeItemState')
      //   let startCoor = type === '1' ? 0 : 30
      let startCoor = type === '1' ? 0 : (+timeItemState.secondMonthEle)
      let countNum = type === '1' ? (+timeItemState.numOfFirstMonth) : (+timeItemState.numOfSecondMonth)
      let firMarginL = 61 * ((+timeItemState.firstMonthCoor) % 7) + 'px'
      let secMarginL = 61 * ((+timeItemState.secondMonthCoor) % 7) + 'px'
      for (let i = startCoor; i < startCoor + countNum; i++) {
          if (type === '1' && i === 0) {
            aMonthDays.push(
                <div className="one-month-day-div first-month-1-day" style={{marginLeft: firMarginL}} onClick={this.clickedIt.bind(this, i)}>
                  <div className='a-certain-day'>{this.dataArr[i] && this.dataArr[i].date}</div>
                  <div className="price-div">
                      <div className='a-certain-stock' title='库存'>
                      {(i === this.state.currentCoor && this.props.form.getFieldsValue().stock) || this.dataArr[i] && this.dataArr[i].stock || '--'}件
                      </div>
                      <div className='a-certain-price' title='价格'>
                      {(i === this.state.currentCoor && this.props.form.getFieldsValue().price) || this.dataArr[i] && this.dataArr[i].price || '--'}元
                      </div>
                  </div>
                </div>)
          } else if (type === '2' && i === timeItemState.secondMonthEle) {
            aMonthDays.push(
                <div className="one-month-day-div second-month-1-day" style={{marginLeft: secMarginL}} onClick={this.clickedIt.bind(this, i)}>
                  <div className='a-certain-day'>{this.dataArr[i] && this.dataArr[i].date}</div>
                  <div className="price-div">
                      <div className='a-certain-stock' title='库存'>
                      {(i === this.state.currentCoor && this.props.form.getFieldsValue().stock) || this.dataArr[i] && this.dataArr[i].stock || '--'}件
                      </div>
                      <div className='a-certain-price' title='价格'>
                      {(i === this.state.currentCoor && this.props.form.getFieldsValue().price) || this.dataArr[i] && this.dataArr[i].price || '--'}元
                      </div>
                  </div>
                </div>)
          } else {
            aMonthDays.push(
            <div className="one-month-day-div" onClick={this.clickedIt.bind(this, i)}>
                <div className='a-certain-day'>{this.dataArr[i] && this.dataArr[i].date}</div>
                <div className="price-div">
                    <div className='a-certain-stock' title='库存'>
                    {(i === this.state.currentCoor && this.props.form.getFieldsValue().stock) || this.dataArr[i] && this.dataArr[i].stock || '--'}件
                    </div>
                    <div className='a-certain-price' title='价格'>
                    {(i === this.state.currentCoor && this.props.form.getFieldsValue().price) || this.dataArr[i] && this.dataArr[i].price || '--'}元
                    </div>
                </div>
            </div>)
          }
      }
      return aMonthDays
    }
    clickedIt(i) {
        this.state.currentCoor && $($('.a-certain-day')[this.state.currentCoor]).css('border-bottom', '2px solid #eee')
        $($('.a-certain-day')[i]).css('border-bottom', '2px solid #1890ff')
        let price = this.dataArr[i] && this.dataArr[i].price || '--'
        let stock = this.dataArr[i] && this.dataArr[i].stock || '--'
        this.setState({price, stock, currentCoor: i})
        this.props.form.setFieldsValue({price, stock})
    }
    submitData () {
        console.log(this.dataArr, 'this.dataArr')
    }
  render() {
      const { getFieldProps } = this.props.form;
      const FormItem = Form.Item;
      const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 18 },
      };
      let timeItemState = this.changeTimeState(this.state.timeItemState.firstMonth)
      let firstMonthDiv = this.renderAMonth('1', timeItemState)
      let secondMonthDiv = this.renderAMonth('2', timeItemState)
      console.log('----render')
    return (
        <div className="container">
        <div className="conditions-to-select">
            <Form inline onSubmit={this.handleSubmit.bind(this)}>
            <Row>
                <Col span={7}>
                    <FormItem label="出发地" {...formItemLayout}>
                        <Select placeholder="请选择出发地" {...getFieldProps('begin')}>
                            <Option key={1}>上海</Option>
                        </Select>
                    </FormItem>
                </Col>
                <Col span={7}>
                    <FormItem label="目的地" {...formItemLayout}>
                        <Select placeholder="请选择目的地" {...getFieldProps('destination')}>
                            <Option key={1}>北京</Option>
                        </Select>
                    </FormItem>
                </Col>
                <Col span={7}>
                    <FormItem label="起始月" {...formItemLayout}>
                        <MonthPicker 
                            defaultValue={moment(`${this.state.timeItemState.firstMonth}`)} 
                            {...getFieldProps('timearea')}/>
                    </FormItem>
                </Col>
                <Col span={3}>
                    <Button className="confirm-dondition-btn" onClick={this.queryData.bind(this)}>查询数据</Button>
                </Col>
            </Row>
            <Row>
                <Col span={7}>
                    <FormItem label="价格/元" onChange={this.changedPrice()} {...formItemLayout}>
                        <Input placeholder="请输入价格" initialValue={this.state.price || '--'} {...getFieldProps('price')}/>
                    </FormItem>
                </Col>
                <Col span={7}>
                    <FormItem label="库存/件" onChange={this.changedStock()} {...formItemLayout}>
                        <Input placeholder="请输入库存" initialValue={this.state.stock || '--'} {...getFieldProps('stock')}/>
                    </FormItem>
                </Col>
                <Col span={10}>
                        <Button type="primary" style={{marginLeft: '293px', marginTop: '3px',backgrounColor: '#2db7f5'}} onClick={this.submitData.bind(this)}>提交数据</Button>             
                </Col>
            </Row>
            </Form>
        </div>
        <div className='two-month-wrapper'>
            <div className="month-area">
                <div className="firsr-month" >{`${this.state.timeItemState.firstMonth.slice(0,4)}年${this.state.timeItemState.firstMonth.slice(5)}月`}</div>
                <div className="second-month">{`${this.state.timeItemState.secondMonth.slice(0,4)}年${this.state.timeItemState.secondMonth.slice(5)}月`}</div>
                <div className='a-wholemonth-wrapper'>
                    <div className='a-week-wrapper'>
                        <span className='one-week-day'>日</span>
                        <span className='one-week-day'>一</span>
                        <span className='one-week-day'>二</span>
                        <span className='one-week-day'>三</span>
                        <span className='one-week-day'>四</span>
                        <span className='one-week-day'>五</span>
                        <span className='one-week-day'>六</span>
                    </div>
                    <div className='month-days-wapper'>
                        {firstMonthDiv}
                    </div>
                </div>
                <div className='a-wholemonth-wrapper'>
                    <div className='a-week-wrapper'>
                        <span className='one-week-day'>日</span>
                        <span className='one-week-day'>一</span>
                        <span className='one-week-day'>二</span>
                        <span className='one-week-day'>三</span>
                        <span className='one-week-day'>四</span>
                        <span className='one-week-day'>五</span>
                        <span className='one-week-day'>六</span>
                    </div>
                    <div className='month-days-wapper'>
                        {secondMonthDiv}
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
  }
}

export default Form.create()(PriceDate);
