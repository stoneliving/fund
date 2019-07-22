import {observable} from 'mobx';
import loadingState from './commomComponents/Loading/index.state';

class State {
  constructor(){
    this.loadingState = new loadingState();
  }
}

export default new State();