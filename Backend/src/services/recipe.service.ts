import RecipeModel from "../models/recipe.model";
import type { Recipe as RecipeType } from "../models/recipe.model";

export const getRecipes = async () => {
  return await RecipeModel.find();
};

export const createRecipe = async (data: RecipeType) => {
  const recipe = new RecipeModel(data);
  return await recipe.save();
};
