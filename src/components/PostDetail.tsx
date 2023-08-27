import React, { FC } from "react";
import { IPost } from "../interface/general";

const PostDetail: FC<IPost> = ({ id, userId, title, body }) => {
  return (
    <>
      <h2>Post: {id}</h2>
      <h2>{title}</h2>
      <p>{body}</p>
    </>
  );
};

export default PostDetail;
