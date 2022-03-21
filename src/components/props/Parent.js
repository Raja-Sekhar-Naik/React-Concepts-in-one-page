import React from "react";
import Child from "./Child";

export default class Parent extends React.Component {
  constructor() {
    super();
    // initial value in state
    this.state = {
      valueReceivedFromChild: "Nothing received yet",
    };
  }

  // method to be passed to child which will receive value from it
  onUpdate = (value) => {
    this.setState({ valueReceivedFromChild: value });
  };

  render() {
    let valueToPass = "Hello from Parent";
    return (
      <React.Fragment>
        <h2>Props Demo</h2>
        <h3>In Parent</h3>
        <p>Value in Parent: {valueToPass}</p>
        <p>Value Received from Child: {this.state.valueReceivedFromChild}</p>
        <Child valuePassed={valueToPass} onUpdate={this.onUpdate}></Child>
      </React.Fragment>
    );
  }
}