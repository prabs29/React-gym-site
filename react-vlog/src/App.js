import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home'
import Fitness from './Components/Pages/Fitness'
import Diet from './Components/Pages/Diet'
import SignUp from './Components/Pages/SignUp'
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <>
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fitness' element={<Fitness />} />
        <Route path='/diet' element={<Diet />} />
        <Route path='/sign-up' element={<SignUp />} />
        
        
        </Routes>
      </Router>
    </>
  );
}

export default App;