import React from 'react';
import {Spin} from 'antd';
import State from './index.state';
import {observer} from 'mobx-react';

@observer
class Index extends React.Component{
  render(){
    return (
      <div style={{display: State.visible ? 'flex':'none', position:'fixed',width:'100%',height:'100%',top:0,left:0,zIndex:9999,justifyContent:'center',alignItems:'center'}}>
        <Spin/>
      </div>
    )
  }
}

export default Index;