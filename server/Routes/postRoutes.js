import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  updatePost,
} from "../Controllers/postController.js";

const router = express.Router();

//All Post Routes goes here
router.get("/", getPost);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
