import React from 'react';
import {hot} from 'react-hot-loader';
import {Input, Button} from 'antd';
import '../node_modules/antd/dist/antd.less';
import './App.less';

class App extends React.Component {
  render(){
    return (
      <div >
        <h1 className="App">Hello, World! Mark</h1>
        <div><Input placeholder="账号"/></div>
        <div><Input placeholder="密码"/></div>
        <div><Button type="primary">登录</Button></div>
      </div>
    )
  }
}

export default hot(module)(App);