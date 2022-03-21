import React from "react";
	import AccErrorHandler from "./AccErrorHandler";
	import Account from "./Account";

	export default class Wrapper extends React.Component {
	  render() {
		return (
		  <React.Fragment>
			<h3>Error Boundaries in React</h3>
			<p className="lead">
			  Click on the button to withdraw amount. The component is programmed to
			  throw an error when withdraw amount is &gt; account balance.
			</p>
			<AccErrorHandler>
			  <Account />
			</AccErrorHandler>
			<hr />
			<p className="lead">
			  Sometimes you might want to reuse the error boundary for other
			  components. It is better for each component to have individual error
			  boundary when you reuse. These two Accounts are each inside of their
			  own error boundary. So even if one crashes, the other is not affected.
			</p>
			<AccErrorHandler>
			  <Account />
			</AccErrorHandler>
			<AccErrorHandler>
			  <Account />
			</AccErrorHandler>
		  </React.Fragment>
		);
	  }
	}
