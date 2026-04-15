import { Schema, model } from "mongoose";

export interface Recipe {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string;
}

const recipeSchema = new Schema<Recipe>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
  instructions: { type: String, required: true },
});

const Recipe = model<Recipe>("Recipe", recipeSchema);

export default Recipe;
