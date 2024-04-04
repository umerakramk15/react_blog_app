import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";

import { Route, Routes } from "react-router-dom";
import SingleBlog from "./pages/singleBlog/SingleBlog";
import Login from "./pages/AuthPage/Login";
import Register from "./pages/AuthPage/Register";
import PrivateRoute from "./components/Routes/private";
import UserDashboard from "./pages/Dashboard/user/Dashboard";
import AdminDashboard from "./pages/Dashboard/admin/AdminDashboard";
import AdminPrivateRoute from "./components/Routes/AdminPrivateRoute";
import AllPost from "./pages/Dashboard/admin/AllPost";
import CreatePost from "./pages/Dashboard/admin/CreatePost";
import Categories from "./pages/Dashboard/admin/Categories"
import CreateCategory from "./pages/Dashboard/admin/CreateCategory"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/blog/post" element={<SingleBlog />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      {/* user Private Routes */}
      <Route path="/dashboard" element={<PrivateRoute />}>
        <Route path="user" element={<UserDashboard />}></Route>
      </Route>
      {/* Admin Private Routes */}
      <Route path="/dashboard" element={<AdminPrivateRoute />}>
        <Route path="admin" element={<AdminDashboard />}></Route>
        <Route path="admin/create-post" element={<CreatePost />}></Route>{" "}
        <Route path="admin/categories" element={<Categories />}></Route>{" "}
        <Route path="admin/posts" element={<AllPost />}></Route>
        <Route path="admin/create-category" element={<CreateCategory />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
