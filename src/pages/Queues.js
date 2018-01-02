import React, { Component } from 'react'
import Table from 'antd/lib/table'
import API from '../config'
// import { NavLink } from 'react-router-dom'

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: (text, record) => <a href={`/queues/${record.name}`}>{text}</a>
}, {
  title: 'Waiting',
  dataIndex: 'waiting',
  key: 'waiting',
  render: (text, record) => <a href={`/queues/${record.name}/waiting`}>{text}</a>
}, {
  title: 'Active',
  dataIndex: 'active',
  key: 'active',
  render: (text, record) => <a href={`/queues/${record.name}/active`}>{text}</a>
}, {
  title: 'Completed',
  dataIndex: 'completed',
  key: 'completed',
  render: (text, record) => <a href={`/queues/${record.name}/completed`}>{text}</a>
}];

class Queues extends Component {

  state = {
    data: []
  }

  componentWillMount() {
    fetch(`${API}/rjq-api/queues`)
      .then(res => res.json())
      .then(data => this.setState({data}))
  }

  render() {
    let {data =[]} = this.state
    data = data.map(record => Object.assign({ key: record.name}, record))

    return <div>
      {/*<NavLink to="/queues">All</NavLink>*/}
      <Table dataSource={data} columns={columns}/>
    </div>
  }
}


export default Queues