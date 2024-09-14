import React from 'react';
import './HealthyRecipes.css';

function HealthyRecipes() {
  const recipes = [
    {
      id: 1,
      title: "Grilled Chicken Salad",
      description: "A light and nutritious salad packed with grilled chicken, fresh greens, and a zesty dressing.",
      ingredients: ["Grilled chicken breast", "Lettuce", "Tomatoes", "Cucumber", "Olive oil", "Lemon juice"],
      image: "/images/chicken-salad.jpg"
    },
    {
      id: 2,
      title: "Quinoa & Veggie Bowl",
      description: "A protein-packed bowl with quinoa, sautéed vegetables, and a tangy tahini dressing.",
      ingredients: ["Quinoa", "Bell peppers", "Zucchini", "Carrots", "Tahini", "Lemon"],
      image: "/images/quinoa-bowl.jpg"
    },
    {
      id: 3,
      title: "Avocado Toast with Eggs",
      description: "Whole-grain toast topped with mashed avocado, poached eggs, and a sprinkle of chili flakes.",
      ingredients: ["Whole-grain bread", "Avocado", "Eggs", "Chili flakes", "Salt", "Pepper"],
      image: "/images/avocado-toast.jpg"
    },
    {
      id: 4,
      title: "Smoothie Bowl",
      description: "A refreshing smoothie bowl made with frozen berries, banana, and topped with granola and chia seeds.",
      ingredients: ["Frozen berries", "Banana", "Almond milk", "Granola", "Chia seeds"],
      image: "/images/smoothie-bowl.jpeg"
    }
  ];

  return (
    <div className="healthy-recipes-container">
      <h2>Healthy Recipes</h2>
      <p>Try these simple and nutritious recipes to fuel your fitness journey.</p>

      <div className="recipes-list">
        {recipes.map((recipe) => (
          <div className="recipe-item" key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <h4>Ingredients:</h4>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HealthyRecipes;
