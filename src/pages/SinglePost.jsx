import React from "react";
import { useParams } from "react-router-dom";

function Post() {
  const params = useParams();
  console.log(params);
  return <div>SinglePost</div>;
}

export default Post;
