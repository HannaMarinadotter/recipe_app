const recipesContainer = document.querySelector(".recipes");
const commentsContainer = document.querySelector(".comments");
const form = document.querySelector(".comment-form");

let selectedRecipeId = null;

async function fetchRecipes() {
  try {
    const response = await fetch("http://localhost:3000/api/recipes");
    const recipes = await response.json();

    displayRecipes(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
}

function displayRecipes(recipes) {
  recipesContainer.innerHTML = "";

  recipes.forEach((recipe) => {
    const article = document.createElement("article");
    article.classList.add("recipe");

    article.innerHTML = `
      <h3>${recipe.title}</h3>
      <p class="description">${recipe.description}</p>
    `;

    article.addEventListener("click", () => {
      selectedRecipeId = recipe._id;
    });

    recipesContainer.appendChild(article);
  });
}

async function fetchComments() {
  try {
    const response = await fetch("http://localhost:3000/api/comments");
    const comments = await response.json();

    displayComments(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
  }
}

function displayComments(comments) {
  commentsContainer.innerHTML = "";

  comments.forEach((comment) => {
    const li = document.createElement("li");
    li.classList.add("comment");

    li.innerHTML = `
      <p><strong>${comment.name}:</strong> ${comment.comment}</p>
      <span class="meta">${comment.created_at || ""}</span>
    `;

    commentsContainer.appendChild(li);
  });
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nameInput = form.querySelector("input[name='name']");
  const textarea = form.querySelector("textarea[name='comment']");

  const name = nameInput.value.trim();
  const comment = textarea.value.trim();

  if (!selectedRecipeId) {
    alert("Please select a recipe first");
    return;
  }

  if (!name || !comment) {
    alert("Please fill in all fields");
    return;
  }

  try {
    await fetch("http://localhost:3000/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recipe_id: selectedRecipeId,
        name,
        comment,
      }),
    });

    nameInput.value = "";
    textarea.value = "";

    fetchComments();
  } catch (error) {
    console.error("Error submitting comment:", error);
  }
});

fetchRecipes();
fetchComments();
