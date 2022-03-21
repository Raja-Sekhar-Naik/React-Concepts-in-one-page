import React, { Component } from "react";
	import LCTester from "./LCTester";

	export default class Tester extends Component {
	  constructor() {
		super();
		this.state = { favoritecolor: "Yellow", secondsElapsed: 0 };
	  }

	  // js methods to update state
	  // will be called by componentDidMount
	  startTimer = () => {
		this.setState({
		  secondsElapsed: this.state.secondsElapsed + 1,
		});
	  };

	  /**
	   * this method runs after the component output has been
	   * rendered to the DOM. This is a good place to set up
	   * timers, or make WS calls.
	   */
	  componentDidMount() {
		this.secondsCounter = setInterval(this.startTimer, 1000);
	  }

	  render() {
		return (
		  <React.Fragment>
			<h2>Life Cycle Demo</h2>
			<article className="p-1 border border-secondary rounded">
			  <h3>LC Hooks</h3>
			  <p>Favorite Color in Tester : {this.state.favoritecolor}</p>
			  <LCTester favcol={this.state.favoritecolor} />
			  <p className="lead">
				You have spent {this.state.secondsElapsed} seconds on this page.
			  </p>
			</article>
		  </React.Fragment>
		);
	  }
	}

