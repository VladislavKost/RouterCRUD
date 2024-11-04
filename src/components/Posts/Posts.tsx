import { Link, useLoaderData } from "react-router-dom";
import { PostItem } from "../PostItem";
import "./Posts.css";

export const Posts = () => {
  const posts = useLoaderData() as {
    id: number;
    content: string;
    created: number;
  }[];

  return (
    <div className="posts">
      <h1>Posts</h1>
      {posts.map((post) => (
        <Link className="post-item" to={`/posts/${post.id}`} key={post.id}>
          <PostItem post={post} />
        </Link>
      ))}
    </div>
  );
};
