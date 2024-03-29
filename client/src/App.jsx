import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";

import { Route, Routes } from "react-router-dom";
import SingleBlog from "./pages/singleBlog/SingleBlog";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/blog/post" element={<SingleBlog />}></Route>
    </Routes>
  );
}

export default App;