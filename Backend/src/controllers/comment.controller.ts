import { Request, Response } from "express";
import { getComments, createComment } from "../services/comment.service";

export const getCommentsController = async (req: Request, res: Response) => {
  try {
    const recipeId = req.query.recipeId as string;

    if (!recipeId || typeof recipeId !== "string") {
      return res.status(400).json({
        message: "Invalid recipe ID",
      });
    }

    const comments = await getComments(recipeId);

    res.status(200).json({
      success: true,
      comments,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch comments",
      error,
    });
  }
};

export const createCommentController = async (req: Request, res: Response) => {
  try {
    const { recipe_id, name, comment } = req.body;

    if (!recipe_id || !name || !comment) {
      return res.status(400).json({
        message: "Missing fields",
      });
    }

    const result = await createComment(recipe_id, name, comment);

    res.status(201).json({
      success: true,
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create comment",
      error,
    });
  }
};
