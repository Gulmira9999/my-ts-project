import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"; // Import the UUID v4 function

const Layout = () => {
  const generatedId = uuidv4();

  return (
    <ul>
      <li>
        <Link to="/signin">Sign in</Link>
      </li>
      <li>
        <Link to={`/profiles/${generatedId}`}>Profile</Link>
      </li>
    </ul>
  );
};

export default Layout;
