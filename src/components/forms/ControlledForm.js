import React from "react";

	export default class ControlledForm extends React.Component {
	  constructor() {
		super();
		this.state = {
		  txtinput: "Raja Sekhar Naik",
		  txtarea: "Trivandrum, Kerala, India",
		  slct: "TVM",
		  rdio: "Male",
		  cbox: true,
		  isSubmitted: false,
		};
	  }

	  // update state for every change
	  handleChange = (event) => {
		const fieldName = event.target.name;
		let fieldValue = event.target.value;
		if (fieldName === "cbox") fieldValue = event.target.checked;

		// use the ES6 computed property name syntax to
		// update the state key corresponding to field name
		this.setState({
		  [fieldName]: fieldValue,
		});
	  };

	  handleSubmit = (event) => {
		// this must be done to stop page refresh
		event.preventDefault();
		this.setState({ isSubmitted: true });
	  };

	  render() {
		return (
		  <React.Fragment>
			<form className="m-2 p-2" onSubmit={this.handleSubmit}>
			  <h3>Controlled Form</h3>
			  <div className="form-group">
				<label htmlFor="txtinput">Name: </label>
				<input
				  type="text"
				  id="txtinput"
				  name="txtinput"
				  className="form-control"
				  placeholder="Your name"
				  value={this.state.txtinput}
				  onChange={this.handleChange}
				></input>
			  </div>
			  <div className="form-group">
				<label htmlFor="txtarea">Address: </label>
				<textarea
				  className="form-control"
				  rows="3"
				  name="txtarea"
				  value={this.state.txtarea}
				  onChange={this.handleChange}
				/>
			  </div>
			  <div className="form-group">
				<label htmlFor="locslct">Pick your location: </label>
				<select
				  id="locslct"
				  className="form-control"
				  name="slct"
				  value={this.state.slct}
				  onChange={this.handleChange}
				>
				  <option value="BLR">BLR</option>
				  <option value="MLR">MLR</option>
				  <option value="TVM">TVM</option>
				  <option value="MYS">MYS</option>
				</select>
			  </div>
			  <div className="form-group">
				<label>Gender:</label>
				<div className="form-check">
				  <label>
					<input
					  type="radio"
					  name="rdio"
					  className="form-check-input"
					  value="Male"
					  checked={this.state.rdio === "Male"}
					  onChange={this.handleChange}
					/>
					Male
				  </label>
				</div>
				<div className="form-check">
				  <label>
					<input
					  type="radio"
					  name="rdio"
					  className="form-check-input"
					  value="Female"
					  checked={this.state.rdio === "Female"}
					  onChange={this.handleChange}
					/>
					Female
				  </label>
				</div>
				<div className="form-check">
				  <label>
					<input
					  type="radio"
					  name="rdio"
					  className="form-check-input"
					  value="Other"
					  checked={this.state.rdio === "Other"}
					  onChange={this.handleChange}
					/>
					Other
				  </label>
				</div>
			  </div>
			  <div className="form-group">
				<label>Accommodation required:</label>
				<div className="form-check">
				  <label>
					<input
					  name="cbox"
					  type="checkbox"
					  className="form-check-input"
					  checked={this.state.cbox}
					  onChange={this.handleChange}
					/>
					Yes
				  </label>
				</div>
			  </div>
			  <div className="form-group">
				<input type="submit" className="btn btn-primary" value="Submit" />
			  </div>
			</form>
			<p className={this.state.isSubmitted ? "m-2 p-2" : "d-none"}>
			  <strong>Entered Values: </strong> <br />
			  Name : <em> {this.state.txtinput} </em> <br />
			  Address : <em> {this.state.txtarea} </em> <br />
			  Location : <em> {this.state.slct} </em> <br />
			  Gender : <em> {this.state.rdio} </em>
			  <br />
			  Accomodation : <em> {this.state.cbox ? "Yes" : "No"} </em>
			</p>
		  </React.Fragment>
		);
	  }
	}
