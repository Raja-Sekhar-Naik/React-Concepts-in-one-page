import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <h2>Welcome to React 17 Demo App</h2>

      <p>
        Click on each of the links to see the demo of the particular concept.
        You can then check each component code to see how they have to be used.
      </p>

      <p>
        <span className="text-warning">NOTE: </span>At this point the app already
        uses:
      </p>
      <ol className="list-group">
        <li className="list-group-item">Components </li>
        <li className="list-group-item">Component hierarchy</li>
        <li className="list-group-item">React Fragments</li>
        <li className="list-group-item">Bootstrap</li>
        <li className="list-group-item">Routing</li>
      </ol>
    </React.Fragment>
  );
}