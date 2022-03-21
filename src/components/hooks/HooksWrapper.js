import React, { useState, useEffect } from "react";

	export default function UseState1() {
	  const [empname, setName] = useState("Nevil");
	  const [empsalary, setSalary] = useState(10000);

	  useEffect(() => {
		console.log("Do something on update of salary");
	  }, [empsalary]); // <- add the state/prop variable you want to run useEffect for here

	  return (
		<React.Fragment>
		  <h3>useState Demo</h3>
		  <form className="m-2 p-2">
			<div className="form-group">
			  <label htmlFor="txtinput">Name: </label>
			  <input
				type="text"
				id="txtinput"
				name="empname"
				className="form-control"
				placeholder="Your name"
				value={empname}
				onChange={(event) => setName(event.target.value)}
			  ></input>
			</div>
			<div className="form-group">
			  <label htmlFor="txtinput">Salary: </label>
			  <input
				type="number"
				id="idinput"
				name="empsalary"
				className="form-control"
				placeholder="Your salary"
				value={empsalary}
				onChange={(event) => setSalary(event.target.value)}
			  ></input>
			</div>
		  </form>
		  <p className="m-2 p-2">
			<strong>Entered Value:</strong> <br />
			<em>Name : {empname} </em> <br />
			<em>Salary : {empsalary} </em> <br />
		  </p>
		</React.Fragment>
	  );
	}
