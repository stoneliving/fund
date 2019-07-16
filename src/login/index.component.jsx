import React, { Component } from 'react';
import {Input, Button} from 'antd';
import State from './index.state';
import {observer} from 'mobx-react';

@observer
class Login extends Component {
  render() {
    return (
      <div>
        <div><Input onChange={e => State.setParam('account', e.target.value)} placeholder="账号"/></div>        
        <div><Input onChange={e => State.setParam('account', e.target.value)} placeholder="密码"/></div>
        <div><Button onClick={State.onLogin} type="primary">登录</Button></div>
      </div>
    );
  }
}

export default Login;