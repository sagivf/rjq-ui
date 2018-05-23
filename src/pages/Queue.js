import React, { Component } from 'react';
import Table from 'antd/lib/table';
import * as moment from 'moment'
import API from '../config'
import { NavLink } from 'react-router-dom'

const columns = [
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status'
  },
  {
    title: 'Created',
    dataIndex: 'dateCreated',
    key: 'dateCreated',
    render: time => time
      ? <div title={time}>{moment(time).fromNow()}</div>
      : <div></div>
  },
  {
    title: 'Repeat',
    dataIndex: 'repeat',
    key: 'repeat'
  },
  {
    title: 'Data',
    dataIndex: 'data',
    key: 'data',
    render: (_data, record) => {
      const {
        dateCreated, key, dateChange, id, queueId, dateEnable, dateFinished,
        dateStarted, log, repeatDelay, retryMax, processCount, status, timeout, progress, priority, retryDelay,
        retryCount, repeat,
        ...data } = record
      return JSON.stringify(data)
    }
  }
]


class Queue extends Component {

  state = {
    data: []
  }

  componentDidMount () {
    this.fetch()
  }

  componentWillReceiveProps(prevProps) {
    const {queue} = this.props.match.params;
    const {queue: prevQueue} = prevProps.match.params;

    if (queue !== prevQueue) {
        this.fetch()
    }
  }

  fetch() {
    const {queue, status} = this.props.match.params;

    fetch(`${API}/queues/${queue}`)
      .then(res => res.json())
      .then(data => !status
        ? data
        : data.filter(({status: _status}) => _status === status)
      )
      .then(data => this.setState({data}))
  }

  render() {
    let {data = []} = this.state
    data = data.map(record => Object.assign({ key: record.id}, record))

    return <div>
      <NavLink to={`/`}>Back</NavLink>
      <Table dataSource={data} columns={columns} />
    </div>
  }
}

export default Queue;
