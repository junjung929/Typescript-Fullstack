import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import Main from './containers/main';

class App extends Component {
  public render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default hot(App);
