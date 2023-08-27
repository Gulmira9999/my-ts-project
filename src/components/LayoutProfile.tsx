import React from "react";
import { Outlet } from "react-router-dom";

const LayoutProfile = () => {
  return (
    <>
      <h1>Layout Profile</h1>
      <Outlet />
    </>
  );
};

export default LayoutProfile;
