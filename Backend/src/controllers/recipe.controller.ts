import { Request, Response } from "express";
import { getRecipes, createRecipe } from "../services/recipe.service";

export const getRecipesController = async (req: Request, res: Response) => {
  try {
    const recipes = await getRecipes();

    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch the recipes",
      error,
    });
  }
};

export const createRecipeController = async (req: Request, res: Response) => {
  try {
    const recipe = await createRecipe(req.body);

    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create recipe",
      error,
    });
  }
};
