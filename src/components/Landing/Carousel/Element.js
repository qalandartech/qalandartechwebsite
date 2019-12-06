import React from 'react';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
const Element = () => {
  return (
    <Carousel.Item className="text-center carousel-item">          
        <h1>Producing</h1>
        <h2>Beyond</h2>
        <h1>Imagination</h1>
        <Button variant="secondary" size="sm">
          Small button
        </Button>
    </Carousel.Item>
  )
}

export default Element
