import React from 'react';
import '../../App.css';
import Fit from './Fit';
import Footer from '../Footer';
import WorkoutPlans from './WorkoutPlans'
import ProgressTracker from './ProgressTracker'
import CommunitySupport from './CommunitySupport';
import QASection from './QASection';

function Fitness() {
    return (
        <>
            <Fit />
            <WorkoutPlans />
            <ProgressTracker />
            <CommunitySupport />
            <QASection />
            <Footer />
        </>
    );
}

export default Fitness;
