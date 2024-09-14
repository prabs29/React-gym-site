import React from 'react';
import './DietChallenges.css';

function DietChallenges() {
  const challenges = [
    {
      id: 1,
      title: "Struggling with Consistency",
      description:
        "Maintaining a healthy diet consistently can be difficult due to temptations, busy schedules, or social events.",
      tip: "Create a meal plan, track your progress, and allow yourself occasional treats to stay motivated.",
    },
    {
      id: 2,
      title: "Lack of Time for Meal Prep",
      description:
        "Busy lifestyles often make it hard to prepare healthy meals, leading to unhealthy takeout or fast food.",
      tip: "Set aside a few hours on the weekend to prep meals for the week. Use quick recipes or batch-cooking.",
    },
    {
      id: 3,
      title: "Cravings and Emotional Eating",
      description:
        "Cravings for sugary or processed foods can derail your healthy eating plans, especially during emotional times.",
      tip: "Identify triggers and find healthy substitutes. Drink water, or choose fruit instead of processed snacks.",
    },
    {
      id: 4,
      title: "Unrealistic Expectations",
      description:
        "Setting overly strict or unrealistic diet goals can lead to frustration and quitting.",
      tip: "Set small, attainable goals. Gradually build better habits instead of overhauling your diet overnight.",
    },
  ];

  return (
    <div className="diet-challenges-container">
      <h2>Diet Challenges</h2>
      <p>Learn how to overcome common diet challenges with our helpful tips.</p>
      
      <div className="challenges-list">
        {challenges.map((challenge) => (
          <div className="challenge-item" key={challenge.id}>
            <h3>{challenge.title}</h3>
            <p>{challenge.description}</p>
            <div className="tip">
              <strong>Tip: </strong> {challenge.tip}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DietChallenges;
