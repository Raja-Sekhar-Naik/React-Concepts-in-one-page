import React from "react";

export default class Child extends React.Component {
  constructor(props) {
    super(props);
  }

  onSendValueToParent = () => {
    // calling the received method of parent with value
    this.props.onUpdate("Hello from Child");
  };

  render() {
    return (
      <React.Fragment>
        <h2>In Child</h2>
        <p>Value received from Parent: {this.props.valuePassed}</p>
        <button
          type="button"
          className="btn btn-outline-warning"
          onClick={this.onSendValueToParent}
        >
          Send Value to Parent
        </button>
      </React.Fragment>
    );
  }
}
