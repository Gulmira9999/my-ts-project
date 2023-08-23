import React, { FC } from "react";
import { useParams } from "react-router-dom";
const Profile: FC = () => {
  const { userId } = useParams();
  return (
    <div>
      <h1>Profile page</h1>
      <h2>Welcome {userId}</h2>
    </div>
  );
};

export default Profile;
