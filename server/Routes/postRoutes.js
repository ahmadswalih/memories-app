import express from "express";
import {
  createPost,
  getPost,
  updatePost,
} from "../Controllers/postController.js";

const router = express.Router();

//All Post Routes goes here
router.get("/", getPost);
router.post("/", createPost);
router.patch("/:id", updatePost);

export default router;
