import { NavLink } from "react-router-dom";

export default function NotFound() {
    return (
      <div className="jumbotron bg-warning">
        <h4 className="display-4">404</h4>
        <p className="lead">
          Sorry, we couldn't find the url on our server. We are pretty sure its up
          and running and hence doesn't look like an issue at our end.
        </p>
        <hr className="my-4" />
        <p>You sure you hit the right url and not typing-under-influence?</p>
        <NavLink to="" className="btn btn-info">
          Go Home
        </NavLink>
      </div>
    );
}