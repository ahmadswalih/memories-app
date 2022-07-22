import React, { useEffect, useState } from "react";
import useStyles from "./Styles";
import { Paper, Typography, Button, TextField } from "@mui/material";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import { useSelector } from "react-redux";

const Forms = ({ currentId, setCurrentId }) => {
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const { paper, form, fileInput, buttonSubmit, root } = useStyles();
  const dispatch = useDispatch();

  //To Populate , if the users has a form value in it
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  //HandleFormSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };
  //ClearForm Function
  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };
  return (
    <Paper className={paper}>
      <form
        className={`${root} ${form}`}
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Editing" : "Create"} a Memory
        </Typography>
        <TextField
          name="creator"
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
          variant="outlined"
          label="Creator"
          fullWidth
        />
        <TextField
          name="title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          variant="outlined"
          label="Title"
          fullWidth
        />
        <TextField
          name="message"
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
          variant="outlined"
          label="Message"
          fullWidth
        />
        <TextField
          name="tags"
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
          variant="outlined"
          label="Tags"
          fullWidth
        />
        <div className={fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={buttonSubmit}
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          type="submit"
        >
          Submit
        </Button>
        <Button
          style={{ marginTop: "5px" }}
          variant="contained"
          color="secondary"
          fullWidth
          size="small"
          onClick={clear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Forms;
