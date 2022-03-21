import React from "react";

	export default class Timer extends React.Component {
	  constructor() {
		super();
		// set initial state in constructor
		this.state = {
		  secondsElapsed: 0,
		};
	  }

	  // regular js methods for counting seconds
	  startTimer = () => {
		this.timerInterval = setInterval(this.timerCounter, 1000);
	  };
	  stopTimer = () => {
		clearInterval(this.timerInterval);
	  };

	  timerCounter = () => {
		// always use this.setState(stateVar: newValue) to update state
		this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
	  };
	  
	  resetTimer = () => {
		clearInterval(this.timerInterval);
		this.setState({ secondsElapsed: 0 });
	  };

	  render() {
		return (
		  <React.Fragment>
			<p>
			  <span className="ml-1">
				Seconds Elapsed: {this.state.secondsElapsed}
			  </span>
			</p>
			<p>
			  <button
				className="btn btn-sm btn-outline-dark m-2"
				onClick={this.startTimer}
			  >
				Start
			  </button>
			  <button
				className="btn btn-sm btn-outline-secondary m-2"
				onClick={this.stopTimer}
			  >
				Stop
			  </button>
			  <button
				className="btn btn-sm btn-outline-secondary m-2"
				onClick={this.resetTimer}
			  >
				Reset
			  </button>
			</p>
		  </React.Fragment>
		);
	  }
	}
	

