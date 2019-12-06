import React,{Fragment} from 'react';

import LandingCarousel from './LandingCarousel';
import Portfolio from './Portfolio';
import Service from './Service';
import Team from './Team';
import Mission from './Mission';
import Footer from './Footer';

const Home = () => {
  return (
    <Fragment>
      <LandingCarousel/>
       <Portfolio/>
       <Service/>
      <Team/>
      <Mission/>
      <Footer/>
    </Fragment>
  )
}

export default Home;
