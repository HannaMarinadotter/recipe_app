import express from "express";
import cors from "cors";
import commentRoutes from "./src/routes/comment.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/comments", commentRoutes);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

export default app;
