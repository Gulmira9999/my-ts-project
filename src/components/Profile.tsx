import React, { FC } from "react";
import { useParams } from "react-router-dom";
const Profile: FC = () => {
  const { username } = useParams();
  return (
    <div>
      <h1>Profile page</h1>
      <h2>Welcome {username}</h2>
    </div>
  );
};

export default Profile;
