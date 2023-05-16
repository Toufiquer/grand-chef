import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import Private from "./page/Private/Private";
import Nav from "./components/Nav/Nav";
import Posts from "./page/Posts/Posts";
import AddPost from "./page/AddPost/AddPost";
import UpdatePost from "./page/UpdatePost/UpdatePost";
import NotFound from "./page/NotFound/NotFound";

function App() {
  return (
    <div>
      <Nav />
      <div className="mt-20 w-full"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<Private />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/addPost" element={<AddPost />} />
        <Route path="/updatePost" element={<UpdatePost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
