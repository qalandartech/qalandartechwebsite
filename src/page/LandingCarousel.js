import React from 'react';
import Navbar from '../components/Landing/NavBar/Navbar';
import FirstCarousel from '../components/Landing/Carousel/FirstCarousel';

const LandingLandingCarousel = () => {
  return (
    <div className="Landing-Carousel bg-image"> 
    <div className="forground-layout">
    <Navbar/>
      <hr/>
      <FirstCarousel/>
    </div>
  </div>
  )
}

export default LandingLandingCarousel;
