import { observable, toJS, action } from 'mobx';
import axios from 'axios';

class State {
  @observable params = {
    username: '',
    password: ''
  }

  @action setParam = (key, value) => {
    this.params[key] = value;
  }

  @action onLogin = ()=> {
    console.log(toJS(this.params));
    axios.get('/login').then(res => console.log(res))
  }
}

export default new State();