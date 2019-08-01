import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Routes from "./Routes";

import './App.css';
import SlideDrawerNav from './containers/SlideDrawerNav';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <SlideDrawerNav />
        <Routes />
      </div>
    );
  }
}

export default App;
