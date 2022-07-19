import React from "react";
import Post from "./Post/Post";
//import useStyles from "./Styles";
import { useSelector } from "react-redux";
const Posts = () => {
  const posts = useSelector((state) => state.posts);
  //const { actionDiv, mainContainer, smMargin } = useStyles();
  console.log(posts);
  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
