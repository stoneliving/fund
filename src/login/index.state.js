import { observable, toJS, action } from 'mobx';
import axios from 'axios';

class State {
  @observable params = {
    account: '',
    password: ''
  }

  @action setParam = (key, value) => {
    this.params[key] = value;
  }

  @action onLogin = ()=> {
    console.log(toJS(this.params));
    axios.get('/users').then(res => console.log(res.data))
  }
}

export default new State();