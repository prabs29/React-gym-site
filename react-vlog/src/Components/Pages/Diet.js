import React from 'react'
import '../../App.css';
import DietVid from './DietVid';
import NutritionalGuidelines from './NTGuide';
import DietChallenges from './DietChallenges';
import HealthyRecipes from './HealthyRecipes';
import Footer from '../Footer';

function Home() {
    return (
        <>
        <DietVid />
        <NutritionalGuidelines />
        <DietChallenges />
        <HealthyRecipes />
        <Footer />
        </>
    )
}

export default Home;