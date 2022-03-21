import React from "react";
import { useNavigate } from "react-router-dom";

const JSXExpressions = () => {
  const navigate = useNavigate();		// assign Hook to local variable 
  const TITLE = "Expressions in JSX";
  let user = {
    firstName: "Raja Sekhar",
    lastName: "Naik",
  };
  let greeting = (user)? <span> Welcome {user.firstName}</span>:<span> Welcome {"Guest"}</span>;
  const SKILLS = [
    { id: 1, name: "React" },
    { id: 2, name: "Angular" },
    { id: 3, name: "Ionic" },
    { id: 4, name: "React Native" },
  ];
   //iterate array using map() and populate skillList element
	  //key is mandatory when you loop over an array 	
	  let skillList = SKILLS.map((skill, index) => {
		return (
		  <tr key={skill.id}>
			<td>{index}</td>
			<td>{skill.id}</td>
			<td>{skill.name}</td>
		  </tr>
		);
	  });
  return (
    <React.Fragment>
      <h2>JSXExpressions Demo</h2>
      <article>
			<h3> {TITLE} </h3>
			<p>4*4 = {4*4}</p>
			<p>Welcome {user.firstName}</p>
            <p>{greeting}</p>
		  </article>
          <article>
			<h3> Iterations using map </h3>
			<table className="table table-bordered table-striped">
			  <thead>
				<tr>
				  <th>Index</th>
				  <th>Skill ID</th>
				  <th>Skill Name</th>
				</tr>
			  </thead>
			  <tbody>{skillList}</tbody>
			</table>
		  </article>
      <button className="btn btn-primary" onClick={() => navigate("/home")}>
        Go Home
      </button>
    </React.Fragment>
  );
};

export default JSXExpressions;