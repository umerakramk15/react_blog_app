import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";

import { Route, Routes } from "react-router-dom";
import SingleBlog from "./pages/singleBlog/SingleBlog";
import Login from "./pages/AuthPage/Login";
import Register from "./pages/AuthPage/Register";
import PrivateRoute from "./components/Routes/private";
import UserDashboard from "./pages/Dashboard/user/Dashboard";
import AdminDashboard from "./pages/Dashboard/admin/Dashboard";
import AdminPrivateRoute from "./components/Routes/AdminPrivateRoute";
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
      </Route>
    </Routes>
  );
}

export default App;
