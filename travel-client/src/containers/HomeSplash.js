import React, { Component } from "react";
import "./HomeSplash.css";

export default class HomeSplash extends Component {
  render() {
    return (
      <div className="HomeSplash">
        <div className="lander">
          <h1>Travel Planner</h1>
          <p>A Travel Planning and Resource Guide</p>
        </div>
      </div>
    );
  }
}