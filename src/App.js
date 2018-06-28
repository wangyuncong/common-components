import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Swiper from './components/swiper'
import DateTime from './components/date'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Swiper></Swiper>
        <DateTime></DateTime>
      </div>
    );
  }
}

export default App;
