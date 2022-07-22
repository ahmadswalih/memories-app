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
const Post = ({ post }) => {
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
  return (
    <Card className={card}>
      <CardMedia
        style={{ height: 0, paddingTop: "56.25%" }}
        className={media}
        image={post.selectedFile}
        title={post.title}
      />

      <div className={overlay}>
        <Typography varient="h6">{post.creator}</Typography>
        <Typography varient="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={overlay2}>
        <Button style={{ color: "white" }} size="small" onClick={() => {}}>
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <CardContent>
        <Typography className={title} variant="h5" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={cardActions}>
        <Button size="small" color="primary" onClick={() => {}}>
          <ThumbUpAltIcon fontSize="small" />
          Like
          {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => {}}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
      {console.log(post.selectedFile)}
    </Card>
  );
};

export default Post;
