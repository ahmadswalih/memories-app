import React from "react";
import useStyles from "./Style";
import {
  Card,
  CardActions,
  CardMedia,
  Button,
  Typography,
  CardContent,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";

const Post = ({ post, setCurrentId, currentId }) => {
  const {
    media,
    border,
    card,
    cardActions,
    details,
    fullHeightCard,
    grid,
    overlay,
    overlay2,
    title,
  } = useStyles();
  const dispatch = useDispatch();
  return (
    <Card className={card}>
      <CardMedia
        style={{ height: 0, paddingTop: "56.25%" }}
        className={media}
        image={post.selectedFile}
        title={post.title}
        component="div"
      />

      <div className={overlay}>
        <Typography varient="h6">{post.creator}</Typography>
        <Typography varient="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography className={title} variant="h5" gutterBottom>
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(likePost(post._id))}
        >
          <ThumbUpAltIcon fontSize="small" />
          &nbsp; {post.likeCount} &nbsp; Like
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
