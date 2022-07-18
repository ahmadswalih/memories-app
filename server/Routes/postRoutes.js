import express from "express";
import { createPost, getPost } from "../Controllers/postController.js";

const router = express.Router();

//All Post Routes goes here
router.get("/", getPost);
router.post("/", createPost);

export default router;
