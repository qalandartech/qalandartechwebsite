import React from 'react';
import Card from 'react-bootstrap/Card';

const PortfolioItem = () => {
  return (
    <Card className="border-0 rounded-0" style={{ width: '18rem' }}>
    <Card.Header className="coustom-color  border-0 rounded-0"><i className="fas fa-users"></i></Card.Header>
    <Card.Body className="text-left card-bg">
      <Card.Title>Primary Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>

  // <div class="card border-0 rounded-0">
  // <div class="card-header coustom-color border-0 rounded-0"><i className="fas fa-users"></i></div>
  // <div class="card-body card-bg">
  //   <h5 class="card-title card-bg">Special title treatment</h5>
  //   <p class="card-text card-bg">Some quick example text to build on the card title and make up the bulk
  //      of the card's content.</p>
  // </div>
// </div>
  )
}

export default PortfolioItem;
