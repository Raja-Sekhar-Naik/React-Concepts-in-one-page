import React, { Component } from "react";
	import axios from "axios";

	export default class WSDemo extends Component {
	  constructor() {
		super();
		this.state = {
		  users: [],
		};
	  }

	  componentDidMount() {
		// on launch, data is still loading
		this.setState({ isLoading: true });

		axios
		  .get("https://reqres.in/api/users")
		  .then((result) =>
			// result.data contains the returned JSON
			this.setState({
			  // remember that the JSON is available within result.data
			  // copy that url to browser to check the structure of the JSON.
			  // user array is within another key, data
			  users: result.data.data,
			  isLoading: false,
			  // we have received data. Hence isLoading is set to false
			})
		  )
		  .catch((error) =>
			this.setState({
			  error,
			  isLoading: false,
			  // there is an error to be displayed. Hence isLoading is set to false
			})
		  );
	  }
	  render() {
		// display loader while fetching data
		if (this.state.isLoading) {
		  return (
			<div class="spinner-border text-primary" role="status">
			  <span class="sr-only">Loading...</span>
			</div>
		  );
		}

		if (this.state.error) {
		  return <p className="text-error">{this.state.error.message}</p>;
		}

		// else display data
		return (
		  <React.Fragment>
			<h2>Web Service Call Demo</h2>
			<p className="lead">
			  Axios library is used to retrieve data from a public web service API.
			  Major portion of the action takes place in componentDidMount().
			</p>

			<h3>Users retrieved from response:</h3>
			<table className="table table-bordered table-striped">
			  <thead className="thead-dark">
				<tr>
				  <th>First Name</th>
				  <th>Last Name</th>
				  <th>Email</th>
				  <th>Avatar</th>
				</tr>
			  </thead>
			  <tbody>
				{/* conditional rendering */}
				{Array.isArray(this.state.users) && this.state.users.length ? (
				  this.state.users.map((user) => {
					return (
					  <tr key={user.id}>
						<td>{user.first_name}</td>
						<td>{user.last_name}</td>
						<td>{user.email}</td>
						<td>
						  <img
							src={user.avatar}
							className="img-thumbnail"
							alt="user avatar"
						  />
						</td>
					  </tr>
					);
				  })
				) : (
				  // no errors, but returned array is empty
				  <tr>
					<td colSpan="4" className="text-warning text-center">
					  No Data found
					</td>
				  </tr>
				)}
			  </tbody>
			</table>
		  </React.Fragment>
		);
	  }
	}
