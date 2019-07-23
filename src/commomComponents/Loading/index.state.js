import {
  observable,
  action
} from 'mobx';
class State {
  @observable visible = false;

  @action showLoading = () => {
    this.visible = true;
  }

  @action hideLoading = () => {
    this.visible = false;
  }
}

export default new State();