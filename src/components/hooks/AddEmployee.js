import React, { useState } from "react";

export default function AddEmployee({ addEmployee }) {
  // state variables
  const [empname, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [empsalary, setSalary] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    // populate employee object with data
    const newEmployee = {
      empname: empname,
      designation: designation,
      empsalary: empsalary,
    };
    addEmployee(newEmployee); // passing data to parent
    // reset input fields
    setName("");
    setDesignation("");
    setSalary(0);
  };

  return (
    <form className="m-2 p-2" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="txtinput">Name: </label>
        <input
          type="text"
          id="idinput"
          name="empname"
          className="form-control"
          placeholder="Your name"
          value={empname}
          onChange={(event) => setName(event.target.value)}
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="txtinput">Designation: </label>
        <input
          type="text"
          id="idinput"
          name="designation"
          className="form-control"
          placeholder="Your name"
          value={designation}
          onChange={(event) => setDesignation(event.target.value)}
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="txtinput">Salary: </label>
        <input
          type="text"
          id="idinput"
          name="empsalary"
          className="form-control"
          placeholder="Your name"
          value={empsalary}
          onChange={(event) => setSalary(event.target.value)}
        ></input>
      </div>
      <div className="form-group">
        <input type="submit" className="btn btn-primary" value="Add Employee" />
      </div>
    </form>
  );
}