import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Mytable from './Mytable.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to MyHome</h1>
        </header>
        <div>
        <p className="App-intro">
          啦啦啦啦!<br/>
          嘿嘿嘿嘿!<br/>
          嘻嘻嘻嘻
        </p>
        <div>
        <Mytable/>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
