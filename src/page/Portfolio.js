import React from 'react';

import  PortfolioItem from '../components/Portfolio/PortfolioItem';


const Portfolio = () => {
  return (
    <div className="text-center text-white Portfolio bg-image bg-image-port">
      <div className="forground-layout">
            <h1 className="pt-3">Portfolio</h1>
            <p className="my-4 mx-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        
          <div className="container text-center port-pad">
        <div className="row">
          <div className="col-md-6 col-lg-4 pt-1">
            <PortfolioItem/>
          </div>
          <div className="col-md-6 col-lg-4 pt-1">
            <PortfolioItem/>
          </div>
          <div className="col-md-6 col-lg-4 pt-1">
            <PortfolioItem/>
          </div>
          <div className="col-md-6 col-lg-4 pt-3">
            <PortfolioItem/>
          </div>
          <div className="col-md-6 col-lg-4 pt-3">
            <PortfolioItem/>
          </div>
          <div className="col-md-6 col-lg-4 pt-3">
            <PortfolioItem/>
          </div>

        </div>
      </div>
          </div>
      </div>
 
  )
}

export default Portfolio
