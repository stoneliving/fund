import React from 'react';
import {hot} from 'react-hot-loader';
import {Input, Button, } from 'antd';
import '../node_modules/antd/dist/antd.less';
import './App.less';
import '../config/axios.config';
import Login from './login/index.component';
import Loading from './commomComponents/Loading/index.component';

class App extends React.Component {
  render(){
    return (
      <div >
        
        <Login/>
        <Loading/>
      </div>
    )
  }
}

export default hot(module)(App);