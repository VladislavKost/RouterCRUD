import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Main } from "./components/Main";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { postsLoader, postLoader } from "./loaders/postLoader";
import { NewPost } from "./components/NewPost";
import { Post } from "./components/Post";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Navigate to="/posts" replace />} />
        <Route path="/posts" element={<Main />} loader={postsLoader} />
        <Route path="/posts/:id" element={<Post />} loader={postLoader} />
        <Route path="/posts/new" element={<NewPost />} />
      </>
    )
  );
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
