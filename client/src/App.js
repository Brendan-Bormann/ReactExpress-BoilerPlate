import React, { Component } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    text: "hi"
  }

  getData = (that) => {
    axios.get('/back')
    .then(function (response) {
      that.setState({"text": response.data.info});
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          The text in state is currently: {this.state.text}.
        </p>
        <button onClick={() => this.getData(this)}>Get Data!</button>
      </div>
    );
  }
}

export default App;
