import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  likePost,
  updatePost,
} from "../Controllers/postController.js";

const router = express.Router();

//All Post Routes goes here
router.get("/", getPost);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/like", likePost);

export default router;
