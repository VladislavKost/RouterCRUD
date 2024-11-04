import { Link } from "react-router-dom";
import { Posts } from "../Posts";
import "./Main.css";

export const Main = () => {
  return (
    <div className="container">
      <Link className="new-post" to="/posts/new">
        <button>Add new post</button>
      </Link>
      <Posts />
    </div>
  );
};
