import React, { Component } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import './App.css'
import Queues from './pages/Queues'
import Queue from './pages/Queue'

const { Header, Content } = Layout

let AppHeader = styled(Header)`
  background: #0f83ea;
  color: #fff;
  font-size: 1.5rem;
  a {
    color: white;
  }
`

let WorkingArea = styled.div`
  padding: 2rem;
  background: white;
  
  table {
    border: 1px solid grey;
  }
`

class App extends Component {
  render () {
    return (
      <Layout id='components-layout-demo-basic'>
        <AppHeader >
          <a href='/'>RethinkDB Job Queue</a>
        </AppHeader>
        <WorkingArea>
          <Content>
            <div>
              <Route exact path='/' component={Queues} />
              <Route path='/queues/:queue/:status?' component={Queue} />
            </div>
          </Content>
        </WorkingArea>
      </Layout>
    )
  }
}
export default App
