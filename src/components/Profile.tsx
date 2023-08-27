import React, { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPosts } from "../api/api";
import { IPost } from "../interface/general";

interface IPosts {
  posts: IPost[];
}

const Profile: FC = () => {
  const { userId } = useParams();
  const [posts, setPosts] = useState<IPosts>();
  useEffect(() => {
    const posts = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };

    posts();
  }, []);

  return (
    <div>
      <h1>Profile page</h1>
      <h2>Welcome {userId}</h2>

      {posts &&
        posts.map((post: IPost) => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
        ))}
    </div>
  );
};

export default Profile;
