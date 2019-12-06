import React from 'react';
import BOSS from '../res/iamgeperson.jpg';

const Team = () => {
  return (
    <div className="Team bg-image text-white">
      <div className="forground-color">
        <div className="card md-3 border-0 rounded-0 team-card">
          <div className="card-header coustom-color rounded-0 text-center"><h4>TEAM</h4></div>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={BOSS} class="card-img rounded-0" alt=".card"/>
            </div>
            <div className="col-md-8">
              <div className="card-body h-100">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Team;






