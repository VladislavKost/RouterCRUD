import { LoaderFunction } from "react-router-dom";

export const postLoader: LoaderFunction = async ({ params }) => {
  const postId = params.id;
  const response = await fetch(`http://localhost:7070/posts/${postId}`);
  const post = await response.json();
  return post;
};

export const postsLoader: LoaderFunction = async () => {
  const response = await fetch(`http://localhost:7070/posts`);
  const posts = await response.json();
  return posts;
};
