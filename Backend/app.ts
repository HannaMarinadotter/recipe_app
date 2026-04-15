import express from "express";
import cors from "cors";
import commentRoutes from "./src/routes/comment.routes";
import recipeRoutes from "./src/routes/recipe.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/comments", commentRoutes);
app.use("/api/recipes", recipeRoutes);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

export default app;
