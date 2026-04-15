import Recipe from "../models/recipe.model";
import type { Recipe as RecipeType } from "../models/recipe.model";

export const getRecipes = async () => {
  return await Recipe.find();
};

export const createRecipe = async (data: RecipeType) => {
  const recipe = new Recipe(data);
  return await recipe.save();
};
