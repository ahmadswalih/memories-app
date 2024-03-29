import React from "react";
import Post from "./Post/Post";
import { CircularProgress, Grid } from "@mui/material";
import useStyles from "./Styles";
import { useSelector } from "react-redux";

const Posts = ({ currentId, setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const { actionDiv, mainContainer, smMargin } = useStyles();
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid className={mainContainer} container alignItems="stretch" spacing={3}>
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} currentId={currentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
