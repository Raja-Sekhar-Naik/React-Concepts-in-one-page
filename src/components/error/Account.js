import React from "react";

	export default class Account extends React.Component {
	  constructor() {
		super();
		this.state = {
		  balance: 1200,	
		};
	  }

	  withdraw = () => {
		this.setState({
		  balance: this.state.balance - 500,
		});
	  };

	  render() {
		// check is balance < withdraw amount
		// we are doing it here since EB cannot 
		// catch errors in event handlers 
		if (0 > this.state.balance) {
		  throw new Error("Insufficient balance.");
		}
		return (
		  <React.Fragment>
			<h2>Account</h2>
			<p>Current Balance: {this.state.balance}</p>
			<button type="button" className="btn btn-info" onClick={this.withdraw}>
			  Withdraw 500
			</button>
		  </React.Fragment>
		);
	  }
	}