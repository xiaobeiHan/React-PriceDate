import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Table, Select, Button, Modal, Input} from 'antd'
import DetailInfo from './DetailInfo'
import PractiseStyle from './PractiseStyle'
import Item from 'antd/lib/list/Item';
import index from 'antd/lib/col';
import PriceDate from './PriceDate';

class Mytable extends Component {
    constructor(props) {
      super(props);
      this.state = {
        detailData: {},
        visible: false,
        data: [{key: '1', amount: '12', name: 'haha', age: 1, hobby: 'Ukelijkjkjkjkjkjkjkjkjkjkjkjkjli', floor: 24, city: 'SHENZHEN', company: 'citic'},
          {key: '2', name: 'xixi', age: 2, hobby: 'singing', floor: 20, city: 'Xian', company: 'citic', pic: 'wsfs'},
        ],
        hidden: ()=>{this.setState({visible: false})}
      },
      this.columns=[
          {title: '姓名', dataIndex: 'name', key: 'name'},
          {title: '年龄', dataIndex: 'age', key: 'age'},
          {title: '爱好', dataIndex: 'hobby', key: 'hobby'},
          {title: '楼层', dataIndex: 'floor', key: 'floor'},
          {title: '退款金额', dataIndex: 'amount', key: 'amount', render: (text, record, index) => {
            console.log(text, record, index)
            return (<Input onChange={this.saveNewData.bind(this, index, 'amount', text)} disabled = {record.disableEdit} defaultValue={record.amount || '' }/>)
          }
          },
          {
            title: '操作', 
            key: 'operation',
            render: (text, record, index) => {
              return (
              <span>
                <Button onClick={this.showMore.bind(this, record)}>详情</Button>
              </span>
              )
            }
          }
      ];
      this.pagination = {
        pageSize: 2,
        total: this.state.data.length
      }
    }
    showMore (index={}) {
      let detailData = {
        options: {cols: 2, labelWidth: '',  backgroundColor: '', border: '1px #eeeeee solid'},
        datas: [
          { titleName: '详细信息', type: 'title'},
          { key: 'name', labelName: '姓名', value: index.name},
          { key: 'age', labelName: '年龄', value: index.age},
          { key: 'hobby', labelName: '爱好', value: index.hobby},
          { key: 'floor', labelName: '楼层', value: index.floor},
          { key: 'city', labelName: '城市', value: index.city, type: 'normal'},
          { key: 'company', labelName: '公司', value: index.company, type: 'normal', heighlight: true},
          { key: 'picture', labelName: '图片', value: index.pic, type: 'pic', heighlight: true},
        ],
      }
      this.setState({visible: true, detailData})
    }
    handleCancel() {
      this.setState({visible: false})
    }
    caculate() {
      let data = [
        {
          id: 1,
          name: 'beijing'
        },{
          id: 2,
          name: 'shanghai'
        },{
          id: 3,
          name: 'shenzhen'
        },{
          id: 2,
          name: 'xian'
        },{
          id: 2,
          name: 'xian'
        },{
          id: 1,
          name: 'xian'
        },{
          id: 3,
          name: 'xian'
        }
      ]
      let result = [
        {
          id: '',
          childs: []
        }
      ]
      let ids = []
      data.map(item1 => {
        result.map((item2, index2) => {
          if (item2.id === item1.id) {
            item2.childs.push(item1)
            ids.push(item1.id)
            return item2
          } 
            if (index2 === result.length - 1 && ids.indexOf(item1.id) === -1) { // lengh
              result.push(
                {
                  id: item1.id,
                  childs: [item1]
                }
              )
            }
          
        })
      })
      console.log(result)
    }
    submitNewData () {
      console.log(this)
    }
    saveNewData (index, type="amount", text) {
      console.log(index, type, text)
    }
  render() {
    return (
      <div>
        <Button onClick={this.caculate.bind(this)}>点我进行计算</Button>
        <Table columns={this.columns} dataSource={this.state.data} pagination={this.pagination}></Table>
        <Button onClick={this.submitNewData.bind(this)}>提交数据</Button>
        <Modal title='showMore' visible={this.state.visible} onCancel={this.handleCancel.bind(this)} onOk={this.handleCancel.bind(this)}>
          <DetailInfo dataSource={this.state.detailData}/>
        </Modal>
        <div className="div-wrap" style={{display: 'table', backgroundColor: '#a0b3d6', height: 200, width: 150, textAlign: 'center'}}>
          <div style={{display: 'table-cell', verticalAlign: 'middle'}}>
            <div>
              垂直居中第一种方法： table<br/>
            lassNahkjhkhkhkhj<br/>sfsf
            </div>
          </div>
        </div>
        <div className="div-wrap-2" style={{backgroundColor: '#ae3333', height: 200, width: 350, textAlign: 'center'}}>
          <div style={{height: 200}}>
            <div className="span-wrap-2" style={{border: '1px red solid', width: '200', verticalAlign: 'middle', display: 'inline-block'}}>垂直居中第二种方法： 空标签<br/>hanxiaobei<br/>sfsfsf</div>
            <div style={{border: '1px black solid', verticalAlign: 'middle', height: '100%', width: '1px', display: 'inline-block'}}></div>
          </div>
        </div>
        <div className="xiaobei">
          <div className="img-div"><img src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg" alt="" className="img-content"/></div>
          <div className="name-div">我是图片的名字</div>
        </div>
        <br/>
        <PriceDate/>
        <PractiseStyle/>
      </div>
    );
  }
}

export default Mytable;
