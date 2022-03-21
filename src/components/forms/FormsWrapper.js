import React from "react";
import ControlledForm from "./ControlledForm";
	import UncontrolledForm from "./UncontrolledForm";

	export default class FormsWrapper extends React.Component {
	  render() {
		return (
		  <React.Fragment>
			<h2>Forms in React</h2>
			<article className="m-1 border border-secondary rounded">
			  <UncontrolledForm />
			</article>
			<article className="m-1 border border-secondary rounded">
			  <ControlledForm />
			</article>
			
		  </React.Fragment>
		);
	  }
	}