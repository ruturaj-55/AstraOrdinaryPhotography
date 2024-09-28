import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import HomePage from "../pages/home";
import BlogsPage from "../pages/blogs";
import BlogPage from "../pages/Content/Blog";
import PostsPage from "../pages/posts";
import PostPage from "../pages/Content/Post";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace={true} />}></Route>
      <Route path="/home" exact element={<HomePage />} />
      <Route path="blogs" exact element={<BlogsPage />} />
      <Route path="blogs/:id" exact element={<BlogPage />} />
      <Route path="posts" exact element={<PostsPage />} />
      <Route path="posts/:id" exact element={<PostPage />} />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
};

export default AppRoutes;
