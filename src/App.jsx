import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashbordPage from "./pages/DashbordPage";
import PostPage from "./pages/PostPage";
import Layout from "./pages/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/app" element={<Layout/>}>
          <Route  index element={<HomePage />} />
          <Route path="dashbord" element={<DashbordPage />} />
          <Route path="post" element={<PostPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
