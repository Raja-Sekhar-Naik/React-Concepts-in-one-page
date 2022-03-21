import React from "react";

	export default class AccErrorHandler extends React.Component {
	  constructor(props) {
		super(props);
		this.state = { hasError: false, error: null, errorInfo: null };
	  }

	  // Update state so the next render will show the fallback UI
	  static getDerivedStateFromError(error) {
		return { hasError: true };
	  }

	  componentDidCatch(error, errorInfo) {
		// Catch errors in any components below and re-render with error message
		this.setState({
		  error: error,
		  errorInfo: errorInfo,
		});
		// You can also log error messages to an error reporting service here
	  }

	  render() {
		if (this.state.errorInfo) {
		  // Error path
		  return (
			<React.Fragment>
			  <h5>Sorry. Withdrawal amount is greater than account balance</h5>
			  <details style={{ whiteSpace: "pre-wrap" }}>
				{this.state.error && this.state.error.toString()}
				<br />
				{this.state.errorInfo.componentStack}
			  </details>
			</React.Fragment>
		  );
		}
		// if no error, just render children
		return this.props.children; // here children will refer to Child component, Account.
	  }
	}