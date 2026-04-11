import { Router } from "express";
import {
  getCommentsController,
  createCommentController,
} from "../controllers/comment.controller";

const router = Router();

router.get("/", getCommentsController);
router.post("/", createCommentController);

export default router;
