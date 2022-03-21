import React from "react";

	export default class UncontrolledForm extends React.Component {
	  constructor(props) {
		super(props);
		this.txtinput = React.createRef(); // direct reference to DOM node
	  }

	  handleSubmit = (event) => {
		// this must be done to stop page refresh
		event.preventDefault();
		if (this.txtinput.current.value === "") 
			alert("Pls enter name");
		else 
			alert("Submitted value: " + this.txtinput.current.value);
	  };

	  render() {
		return (
		  <form className="m-2 p-2" onSubmit={this.handleSubmit}>
			<h3>Uncontrolled Form</h3>
			<div className="form-group">
			  <label htmlFor="txtinput">Name: </label>
			  <input
				id="txtinput"
				type="text"
				className="form-control"
				placeholder="Your name"
				ref={this.txtinput}
				defaultValue="Sekhar"
			  />
			</div>
			<div className="form-group">
			  <input type="submit" className="btn btn-primary" value="Submit" />
			</div>
		  </form>
		);
	  }
	}