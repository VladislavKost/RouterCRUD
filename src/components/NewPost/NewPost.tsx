import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { newPostSubmit } from "../../loaders/postManagement";
import "./NewPost.css";

export const NewPost = () => {
  const [content, setContent] = useState<string>("");
  const navigate = useNavigate();

  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await newPostSubmit({ content });
    if (result.status == 204) {
      navigate("/posts");
    } else {
      alert("Error while saving post");
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={onHandleSubmit}>
        <h1>Add new post</h1>
        <textarea
          placeholder="Post content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button>Post</button>
      </form>
    </div>
  );
};
