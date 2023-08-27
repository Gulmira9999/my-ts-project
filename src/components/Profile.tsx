import React, { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPosts, getUser } from "../api/api";
import IUser, { IPost } from "../types";

const Profile: FC = () => {
  const { userId } = useParams();
  const [posts, setPosts] = useState<IPost[]>();
  const [user, setUser] = useState<IUser | null>(null);
  useEffect(() => {
    const profile = async () => {
      const user = await getUser(userId);
      setUser(user);
    };
    const posts = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };

    profile();
    posts();
  }, [userId]);

  // const userName = (user as IUser).id;
  return (
    <div>
      {user && (
        <>
          <h1>{user.name}</h1>
          <h2>Welcome {user.name}</h2>
          {/* <p>{}</p> */}
        </>
      )}

      {posts &&
        posts.map((post: IPost) => (
          <Link key={post.id} to={`/profiles/${post.userId}/posts/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
        ))}
    </div>
  );
};

export default Profile;
