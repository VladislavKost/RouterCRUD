import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { PostItem } from "../PostItem";
import "./Post.css";
import { postDelete } from "../../loaders/postManagement";
import { useState } from "react";
import { EditPost } from "../EditPost";

export interface IPost {
  post: {
    id: number;
    content: string;
    created: number;
  };
}

export const Post = () => {
  const { post } = useLoaderData() as IPost;
  const navigate = useNavigate();
  const [mode, setMode] = useState<string>("read");

  const onHandleDelete = async () => {
    const result = await postDelete(post.id);
    if (result.status === 204) {
      navigate("/posts");
    } else {
      alert("Error while deleting post");
    }
  };
  const onHandleEdit = () => {
    setMode("edit");
  };

  const handleClickBack = () => {
    navigate("/posts");
  };

  return mode === "read" ? (
    <div className="container">
      <div className=" post-contain">
        <div className="post-header">
          <button className="back-to-posts" onClick={handleClickBack}>
            Back to posts
          </button>
        </div>
        <PostItem post={post} />
        <div className="post-buttons">
          <button className="edit" onClick={onHandleEdit}>
            Edit
          </button>
          <button className="delete" onClick={onHandleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <EditPost post={post} setMode={setMode} />
    </div>
  );
};
