import React, { Component } from 'react';
import Table from 'antd/lib/table';
import Input from 'antd/lib/input';
import { DatePicker } from 'antd';
import * as moment from 'moment'
import API from '../config'
import { NavLink } from 'react-router-dom'
import Icon from 'antd/es/icon/index';

const { RangePicker } = DatePicker;

const pluckData = record => {
  const {
    dateCreated, key, dateChange, id, queueId, dateEnable, dateFinished,
    dateStarted, log, repeatDelay, retryMax, processCount, status, timeout, progress, priority, retryDelay,
    retryCount, repeat,
    ...data } = record

  return JSON.stringify(data)
}

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
     return  pluckData(record)
    }
  }
]


class Queue extends Component {

  state = {
    dateFilter: null,
    textFilter: null,
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

  fetch = () => {
    const {queue, status} = this.props.match.params;

    this.data = [];
    this.setState({data: []})

    setTimeout(() => {
      fetch(`${API}/queues/${queue}`)
        .then(res => res.json())
        .then(data => !status
          ? data
          : data.filter(({status: _status}) => _status === status)
        )
        .then(data => {
          data.sort((a, b) => {
            a = moment(a.dateCreated)
            b = moment(b.dateCreated)
            if (a.isAfter(b)) {
              return -1;
            }
            if (b.isAfter(a)) {
              return 1;
            }
            return 0;
          })
          this.data = [...data]
          this.setState({data})
        })
    }, 300)
  }

  onRangeChange = value => {
    this.setState({dateFilter: value}, this.filter)
  }

  onFilter = e => {
    const value = e.target.value;
    this.setState({textFilter: value}, this.filter)
  }

  filter = () => {
    const {textFilter, dateFilter} = this.state
    let data = [...this.data]

    if (dateFilter) {
      data = data.filter(record => {
        return moment(record.dateCreated).isBetween(dateFilter[0], dateFilter[1]) ;
      })
    }

    if (textFilter) {
      data = data.filter(record => {
        const pluckedData = pluckData(record)
        return pluckedData.toLowerCase().includes(textFilter.toLowerCase());
      })
    }

    this.setState({data})
  }

  render() {
    let {data = []} = this.state
    const queue = this.props.match.params
    data = data.map(record => Object.assign({ key: record.id}, record))

    return <div>
      <NavLink to={`/`}>Back</NavLink>
      <Icon type="sync" onClick={this.fetch} className="rjq-ml cursor" />
      <h1>{queue.queue}</h1>
      <div className="rjq-mb">
        <RangePicker onChange={this.onRangeChange}/>
      </div>
      <div className="rjq-search rjq-mb">
        <Input placeholder="Search" autoFocus={true} onChange={this.onFilter}/>
      </div>
      <Table dataSource={data} columns={columns} />
    </div>
  }
}

export default Queue;
