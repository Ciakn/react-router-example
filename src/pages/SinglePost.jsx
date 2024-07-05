import React from "react";
import { useParams } from "react-router-dom";
const posts = [
  { id: 1, title: "post one", body: "bodyy one" },
  { id: 2, title: "post two", body: "bodyy two" },
  { id: 3, title: "post three", body: "bodyy three" },
];
function Post() {
  const { id } = useParams();

  const post = posts.find((p) => p.id == id);

  return (
    <div style={{backgroundColor :"gray" , borderRadius :"15px" , padding:"15px"}}>
      <h2>post ID : {post.id}</h2>
      <h4>post title : {post.title}</h4>
      <p>body :{post.body}</p>
    </div>
  );
}

export default Post;
