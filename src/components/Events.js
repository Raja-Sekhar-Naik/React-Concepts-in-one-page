import React from "react";

	export default class Events extends React.Component {
	  constructor() {
		super();
		this.withTraditional = this.withTraditional.bind(this);
	  }

	  withTraditional() {
		alert(
		  "Event handler with traditional function. Has to be bound in constructor"
		);
	  }

	  withArrow = () => {
		alert(
		  "Event handler with arrow function. No need to be bound in constructor"
		);
	  };

	  withParameter = (param) => {
		alert(
		  "Received parameter: " +
			param +
			"\n Check the code to see how it is passed."
		);
	  };
	  render() {
		return (
		  <React.Fragment>
			<h2>Event Handling Demo</h2>
			<div className="btn-group" role="group" ariaLabel="Event button group">
			  <button
				type="button"
				className="mr-1 btn btn-secondary"
				onClick={this.withTraditional}
			  >
				With Traditional Function
			  </button>
			  <button
				type="button"
				className="mr-1 btn btn-secondary"
				onClick={this.withArrow}
			  >
				With Arrow Function
			  </button>
			  <button
				type="button"
				className="btn btn-secondary"
				onClick={() => this.withParameter("Hello")}
			  >
				Arrow Function with Parameter
			  </button>
			</div>
		  </React.Fragment>
		);
	  }
	}
