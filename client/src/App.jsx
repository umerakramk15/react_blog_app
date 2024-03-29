import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      
    </Routes>
  );
}

export default App;