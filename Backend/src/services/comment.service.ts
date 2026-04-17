import pool from "../config/mysql";

export const getComments = async (recipeId: string) => {
  try {
    if (!recipeId) {
      throw new Error("Missing recipe ID");
    }

    const [rows] = await pool.execute("SELECT * FROM comments WHERE recipe_id = ?", [recipeId]);

    if (!rows) {
      throw new Error("No comments found");
    }

    return rows;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
};

export const createComment = async (
  recipe_id: string,
  name: string,
  comment: string
) => {
  try {
    if (!recipe_id || !name || !comment) {
      throw new Error("Missing fields");
    }

    const [result] = await pool.execute(
      "INSERT INTO comments (recipe_id, name, comment) VALUES (?, ?, ?)",
      [recipe_id, name, comment]
    );

    return result;
  } catch (error) {
    console.error("Error creating comment:", error);
    throw error;
  }
};
