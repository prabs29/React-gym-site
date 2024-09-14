import React from 'react';
import FullBodyWorkoutImg from '../../images/fullbody.jpg';
import CardioBlastImg from '../../images/cardio.jpg';
import StrengthTrainingImg from '../../images/strength.jpg';
import './Workout.css';

const workoutPlans = [
    {
        id: 1,
        title: 'Full Body Workout',
        description: 'Targets all major muscle groups.',
        image: FullBodyWorkoutImg,
    },
    {
        id: 2,
        title: 'Cardio Blast',
        description: 'Burn calories and improve endurance.',
        image: CardioBlastImg,
    },
    {
        id: 3,
        title: 'Strength Training',
        description: 'Build muscle strength.',
        image: StrengthTrainingImg,
    },
];

function WorkoutPlans() {
    return (
        <div className="workout-plans">
            <h2>Workout Plans</h2>
            <div className="workout-plans-list">
                {workoutPlans.map(plan => (
                    <div key={plan.id} className="workout-plan">
                        <img
                            src={plan.image}
                            alt={plan.title}
                            className="workout-plan-image"
                        />
                        <h3>{plan.title}</h3>
                        <p>{plan.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WorkoutPlans;
