import React, { useState } from "react";
import useStyles from "./Styles";
import { Paper, Typography, Button, TextField } from "@mui/material";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";

const Forms = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const { paper, form, fileInput, buttonSubmit, root } = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };
  const clear = () => {};
  return (
    <Paper className={paper}>
      <form
        className={`${root} ${form}`}
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Create a Memory</Typography>
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
