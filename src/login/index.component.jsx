import React, { Component } from 'react';
import {Input, Button} from 'antd';
import State from './index.state';
import {observer} from 'mobx-react';
import './index.less';
@observer
class Login extends Component {
  render() {
    return (
      <div className="login-wrapper">
        <div>
          <h1>登录</h1>
          <div><Input onChange={e => State.setParam('username', e.target.value)} placeholder="账号"/></div>        
          <div><Input.Password type="" onChange={e => State.setParam('password', e.target.value)} placeholder="密码"/></div>
          <div><Button onClick={State.onLogin} type="primary">登录</Button></div>
        </div>
      </div>
    );
  }
}

export default Login;