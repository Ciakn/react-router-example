import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashbordPage from "./pages/DashbordPage";
import PostPage from "./pages/PostPage";
import Layout from "./pages/Layout";
import Payment from "./components/Payment";
import Profile from "./components/Profile";
import Post from "./pages/SinglePost";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="dashbord" element={<DashbordPage />}>
            <Route index element={<Payment />} />
            <Route path="payments" element={<Payment />} />

            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="posts/:id" element={<Post />} />
          <Route path="posts" element={<PostPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
