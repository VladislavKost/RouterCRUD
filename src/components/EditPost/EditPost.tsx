import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { editPostSubmit } from "../../loaders/postManagement";
import "./EditPost.css";

export const EditPost = ({
  post,
  setMode,
}: {
  post: { content: string; id: number; created: number };
  setMode: (mode: string) => void;
}) => {
  const [content, setContent] = useState<string>(post.content);
  const navigate = useNavigate();

  const handleSaveClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const result = await editPostSubmit({ id: post.id, content });
    if (result.status === 204) {
      navigate("/posts");
    } else {
      alert("Error while saving post");
    }
  };

  const handleCancelEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    setMode("read");
  };

  return (
    <div className="container">
      <form className="form">
        <h1>Edit post</h1>
        <textarea
          placeholder="Post content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <div className="edit-buttons">
          <button type="button" className="save" onClick={handleSaveClick}>
            Save
          </button>
          <button type="button" className="cancel" onClick={handleCancelEdit}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
