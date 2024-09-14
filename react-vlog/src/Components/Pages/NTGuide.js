import React from 'react';
import './NTGuide.css';

function NutritionalGuidelines() {
  return (
    <div className="nutritional-guidelines">
      <h2>Nutritional Guidelines</h2>
      <p>Understanding the basics of nutrition can help you make healthier food choices.</p>

      <div className="macro-section">
        <div className="macro-item">
          <h3>Proteins</h3>
          <p>Proteins are essential for muscle repair and growth. They are made up of amino acids, which are the building blocks of your body's tissues.</p>
          <ul>
            <li>Chicken, beef, and fish are good sources of complete proteins.</li>
            <li>Vegetarian options include beans, lentils, and tofu.</li>
          </ul>
        </div>

        <div className="macro-item">
          <h3>Fats</h3>
          <p>Fats are a crucial energy source and are necessary for absorbing vitamins. They also play a role in hormone production and brain health.</p>
          <ul>
            <li>Healthy fats: Avocados, nuts, and olive oil.</li>
            <li>Limit saturated fats and avoid trans fats when possible.</li>
          </ul>
        </div>

        <div className="macro-item">
          <h3>Carbohydrates</h3>
          <p>Carbohydrates are the body's primary energy source. They are broken down into glucose, which fuels your muscles and brain.</p>
          <ul>
            <li>Complex carbs: Whole grains, sweet potatoes, and vegetables.</li>
            <li>Simple carbs: Fruits, honey, and dairy products.</li>
          </ul>
        </div>
      </div>

      <div className="general-tips">
        <h3>General Nutrition Tips</h3>
        <ul>
          <li>Drink plenty of water throughout the day to stay hydrated.</li>
          <li>Include a variety of fruits and vegetables in your diet.</li>
          <li>Moderation is key – balance your intake of proteins, fats, and carbohydrates.</li>
          <li>Avoid processed foods and focus on whole, natural ingredients.</li>
        </ul>
      </div>
    </div>
  );
}

export default NutritionalGuidelines;
