import React, { Component } from 'react'
import Table from 'antd/lib/table'
// import { DatePicker } from 'antd';
import API from '../config'
import { NavLink } from 'react-router-dom'
import Icon from 'antd/es/icon/index';

// const { RangePicker } = DatePicker;

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: (text, record) => <NavLink to={`queues/${record.name}`}>{text}</NavLink>
}, {
  title: 'Waiting',
  dataIndex: 'waiting',
  key: 'waiting',
  render: (text, record) => <NavLink to={`queues/${record.name}/waiting`}>{text}</NavLink>
}, {
  title: 'Active',
  dataIndex: 'active',
  key: 'active',
  render: (text, record) => <NavLink to={`queues/${record.name}/active`}>{text}</NavLink>
}, {
  title: 'Cancelled',
  dataIndex: 'cancelled',
  key: 'cancelled',
  render: (text, record) => <NavLink to={`queues/${record.name}/cancelled`}>{text}</NavLink>
}, {
  title: 'Completed',
  dataIndex: 'completed',
  key: 'completed',
  render: (text, record) => <NavLink to={`queues/${record.name}/completed`}>{text}</NavLink>
}];

class Queues extends Component {

  state = {
    data: []
  }

  componentWillMount() {
    this.fetch();
  }

  fetch = () => {
    this.setState({data: []})

    setTimeout(() => {
      fetch(`${API}/queues`)
        .then(res => res.json())
        .then(data => this.setState({data}))
    }, 300)
  }

  // onRangeChange(date, dateString) {
  //
  // }

  render() {
    let {data =[]} = this.state
    data = data.map(record => Object.assign({ key: record.name }, record))

    return <div>
      <div className="rjq-mb">
        <Icon type="sync" onClick={this.fetch} className="cursor"/>
      </div>
      {/*<div className="rjq-mb">*/}
        {/*<RangePicker onChange={this.onRangeChange} />*/}
      {/*</div>*/}
      <Table dataSource={data} columns={columns}/>
    </div>
  }
}


export default Queues