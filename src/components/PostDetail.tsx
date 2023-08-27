import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostDetail } from "../api/api";
import { IPost } from "../types";

const PostDetail: FC = () => {
  const [post, setPost] = useState<IPost | null>(null);

  const { postId } = useParams();
  console.log(postId);

  useEffect(() => {
    const postDetail = async () => {
      const post = await getPostDetail(postId);
      console.log(post);

      setPost(post);
    };
    postId && postDetail();
  }, [postId]);
  return (
    <>
      {" "}
      {post && (
        <>
          <h2>Post detail: {post.id}</h2>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      )}
    </>
  );
};

export default PostDetail;
