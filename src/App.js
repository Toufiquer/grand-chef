import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import Private from "./page/Private/Private";
import Nav from "./components/Nav/Nav";
import Posts from "./page/Posts/Posts";
import AddPost from "./page/AddPost/AddPost";
import UpdatePost from "./page/UpdatePost/UpdatePost";
import NotFound from "./page/NotFound/NotFound";
import LogInRegister from "./page/LogInRegister/LogInRegister";
import EditPosts from "./page/EditPost/EditPosts";
import Footer from "./components/Footer/Footer";
import Service from "./page/Service/Service";

function App() {
  return (
    <div className={` bg-white dark:bg-gray-900`}>
      <Nav />
      <div className="pt-20 w-full bg-white dark:bg-gray-900"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<Private />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/services" element={<Service />} />
        <Route path="/addPost" element={<AddPost />} />
        <Route path="/updatePost" element={<UpdatePost />} />
        <Route path="/editPost" element={<EditPosts />} />
        <Route path="/authentication" element={<LogInRegister />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
