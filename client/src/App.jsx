import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";

import { Route, Routes } from "react-router-dom";
import SingleBlog from "./pages/singleBlog/SingleBlog";
import Login from "./pages/AuthPage/Login";
import Register from "./pages/AuthPage/Register";
import PrivateRoute from "./components/Routes/private";
import UserDashboard from "./pages/Dashboard/user/Dashboard";
import Dashboard from "./pages/Dashboard/Admin/Dashboard";
import AdminPrivateRoute from "./components/Routes/AdminPrivateRoute";
import Navbar from "./pages/Dashboard/Admin/Navbar";
import AllPosts from "./pages/Dashboard/Admin/AllPosts";
import CreatePost from "./pages/Dashboard/Admin/CreatePost";
import UpdatePost from "./pages/Dashboard/Admin/UpdatePost";

import Overview from "./pages/Dashboard/Admin/Overview";

// fetching all posts
import { useSelector, useDispatch } from "react-redux";
import { fetchAllPostsData } from "./store/FetchAllPostSlice";
import { useEffect } from "react";

function App() {
  const posts = useSelector((state) => state.allPost); // Ensure correct slice name

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPostsData());
  }, []);
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
        <Route path="" element={<Navbar />}>
          <Route path="admin" element={<Dashboard />}></Route>
          <Route path="admin/posts" element={<AllPosts />}></Route>
          <Route path="admin/create-post" element={<CreatePost />}></Route>
          <Route path="admin/update-post/:slug" element={<UpdatePost />}></Route>
          <Route path="admin/overview" element={<Overview />}></Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
