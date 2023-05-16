import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import Private from "./page/Private/Private";
import Nav from "./components/Nav/Nav";
import Posts from "./page/Posts/Posts";

function App() {
  return (
    <div>
      <Nav />
      <div className="mt-20 w-full"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<Private />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
