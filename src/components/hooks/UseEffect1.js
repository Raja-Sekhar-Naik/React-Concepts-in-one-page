import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UseEffect1() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://reqres.in/api/users").then((result) => {
      setUsers(result.data.data);
    });
  }, []); // empty [] dependency

  return (
    <React.Fragment>
      <h3>useEffect Demo</h3>
      <h4>WS call with useEffect - [] dependency</h4>
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
          {users.map((user) => {
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
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
}

