import React from 'react'
import { Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import DashbordPage from './pages/DashbordPage';
import PostPage from './pages/PostPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='' element={""}>
          <Route path="/" index element={<HomePage />} />
          <Route path="/" element={<DashbordPage />} />
          <Route path="/" element={<PostPage/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App