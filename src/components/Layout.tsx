import React from "react";
import { Link } from "react-router-dom";
const Layout = () => {
  return (
    <ul>
      <li>
        <Link to="/signin">Sign in</Link>
      </li>
      <li>
        <Link to={`/profiles`}>Profile</Link>
      </li>
    </ul>
  );
};

export default Layout;
