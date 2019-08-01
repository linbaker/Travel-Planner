import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Routes from "./Routes";

import './App.css';
import SlideDrawerNav from './containers/SlideDrawerNav';

class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      isAuthenticated: false
    };
  }
  
  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  render() {

    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      <div className="App container">
        <SlideDrawerNav />
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default App;
