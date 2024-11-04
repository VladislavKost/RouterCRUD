interface Post {
  content: string;
}
interface EditPost {
  id: number;
  content: string;
}

export const newPostSubmit = async (post: Post) => {
  const response = await fetch(`http://localhost:7070/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  return response;
};

export const postDelete = async (postId: number) => {
  const response = await fetch(`http://localhost:7070/posts/${postId}`, {
    method: "DELETE",
  });
  return response;
};

export const editPostSubmit = async (post: EditPost) => {
  const response = await fetch(`http://localhost:7070/posts/${post.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  return response;
};
