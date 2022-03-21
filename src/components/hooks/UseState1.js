import React, { useState } from "react";
	import AddEmployee from "./AddEmployee";

	export default function UseState1() {
	  const [employees, setEmployees] = useState([
		{ empname: "John", designation: "SE", empsalary: 4000 },
		{ empname: "Tom", designation: "SSE", empsalary: 6000 },
		{ empname: "Kevin", designation: "TA", empsalary: 8000 },
	  ]);
	  const addEmployee = (newEmployee) => {
		// ... used to preserve existing values in array
		setEmployees([...employees, newEmployee]);
	  };
	  return (
		<React.Fragment>
		  <h3>useState Demo</h3>
		  <p className="m-2 p-2">
			<strong>Employee Details:</strong>
		  </p>
		  <table className="table table-bordered table-striped">
			<thead className="thead-dark">
			  <tr>
				<th>Name</th>
				<th>Designation</th>
				<th>Salary</th>
			  </tr>
			</thead>
			<tbody>
			  {employees.map((employee, index) => {
				return (
				  <tr key={index}>
					<td>{employee.empname}</td>
					<td>{employee.designation}</td>
					<td>{employee.empsalary}</td>
				  </tr>
				);
			  })}
			</tbody>
		  </table>
		  <AddEmployee addEmployee={addEmployee} />{" "}
		  {/** calling child with method prop */}
		</React.Fragment>
	  );
	}
