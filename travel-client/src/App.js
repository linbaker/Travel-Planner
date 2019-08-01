import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './App.css';
import SlideDrawerNav from './containers/SlideDrawerNav';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <SlideDrawerNav />>
      </div>
    );
  }
}

export default App;
