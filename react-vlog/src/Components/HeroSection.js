import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css';
function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="/videos/vid-2.mp4" autoPlay loop muted />
        <h1 >COME AND JOIN</h1>
        <p>Discover more of Yourself </p>
        <div className='hero-btns'>
        <Button 
        className='btns' 
        buttonStyle='btn--outline'
        buttonSize='btn--large'
        >
            Sign-Up
        </Button>
        <Button 
        className='btns' 
        buttonStyle='btn--primary'
        buttonSize='btn--large'
        >
            Workouts <i className='far fa-play-circle' />
        </Button>
        </div>
    </div>
  )
}

export default HeroSection