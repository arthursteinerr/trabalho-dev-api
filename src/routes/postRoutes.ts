//Arthur Steiner Morais Silva

import { Router } from "express";
import { createPost } from "../controller/postController";
import { updatePostPatch } from "../controller/postController";
import { deletePost } from "../controller/postController";

const router = Router();

router.post("/", createPost);
router.patch("/:id", updatePostPatch);
router.delete("/:id", deletePost);

export default router;