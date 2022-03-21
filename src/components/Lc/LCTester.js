import React, { Component } from "react";

export default class LCTester extends Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "" };
  }

  // will override state set by constructor as it runs
  // after constructor.
  // avoid if possible since it is a performance overhead
  /*static getDerivedStateFromProps(props, state) {
    return { favoritecolor: props.favcol };
  }*/
  componentDidMount() {
    this.setState({ favoritecolor: this.props.favcol });
  }

  shouldComponentUpdate(newProps, newState) {
    // prevent updation for state change to "Blue"
    if (newState.favoritecolor === "Blue") return false;

    else return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      "Just before commiting DOM update. Old value: " + prevState.favoritecolor
    );
    return null;
  }

  // must be used if getSnapshotBeforeUpdate(...) is used
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component successfully updated");
  }

 // event handlers
 changeToGreen = () => {
    this.setState({ favoritecolor: "Green" });
  };

  changeToGrey = () => {
    this.setState({ favoritecolor: "Grey" });
  };

  changeToBlue = () => {
    this.setState({ favoritecolor: "Blue" });
  };

  render() {
    return (
      <React.Fragment>
        <p>Favorite Color (child) : {this.state.favoritecolor}</p>
        <button type="button" className="m-1 btn btn-outline-success" onClick={this.changeToGreen}>
          Green
        </button>
        <button type="button" className="m-1 btn btn-outline-secondary" onClick={this.changeToGrey}>
          Grey
        </button>
        <button type="button" className="m-1 btn btn-outline-primary" onClick={this.changeToBlue}>
          Blue
        </button>
      </React.Fragment>
    );
  }
}