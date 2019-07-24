import React, { Component } from 'react';
import {Input, Button, Form} from 'antd';
import State from './index.state';
import {observer} from 'mobx-react';
import './index.less';
@observer
class Login extends Component {
  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <div>
        <Form>
          <Form.Item>
            {getFieldDecorator('account',{
              rules:[{
                required:true,
                message:'请输入账号'
              }]
            })(
              <Input onChange={e => State.setParam('account', e.target.value)} placeholder="账号"/>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password',{
              rules:[{
                required:true,
                message:'请输入密码'
              }]
            })(
              <Input onChange={e => State.setParam('password', e.target.value)} placeholder="密码"/>
            )}
          </Form.Item>
        </Form>
        <div><Button onClick={State.onLogin} type="primary">登录</Button></div>
      </div>
    );
  }
}
Login = Form.create({})(Login)
export default Login;