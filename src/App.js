import React from 'react';
import {hot} from 'react-hot-loader';
import {Input, Button} from 'antd';
import '../node_modules/antd/dist/antd.less';
import './App.less';

import Login from './login/index.component';
import mock from '../axiosMock/index';

class App extends React.Component {
  render(){
    return (
      <div >
        <h1 className="App">登录</h1>
        <Login/>
      </div>
    )
  }
}

export default hot(module)(App);