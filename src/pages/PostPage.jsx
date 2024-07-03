import React from "react";
import { useParams, Link } from "react-router-dom";

function PostPage() {
  return (
    <div>
      <Link to="1">post-1</Link>
      <Link to="2">post-2</Link>
      <Link to="3">post-3</Link>
    </div>
  );
}

export default PostPage;
