import React from 'react';
import './ProgressTracker.css';

const progressData = [
    {
        id: 1,
        title: 'Completed Full Body Workout',
        percentage: 100,
    },
    {
        id: 2,
        title: 'Cardio Blast',
        percentage: 75,
    },
    {
        id: 3,
        title: 'Strength Training',
        percentage: 50,
    },
];

function ProgressTracker() {
    return (
        <div className="progress-tracker">
            <h2>Progress Tracker</h2>
            <div className="progress-list">
                {progressData.map(item => (
                    <div key={item.id} className="progress-item">
                        <div className="progress-title">{item.title}</div>
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{ width: `${item.percentage}%` }}
                            ></div>
                        </div>
                        <div className="progress-percentage">{item.percentage}%</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProgressTracker;
