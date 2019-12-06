import React,{useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Button from 'react-bootstrap/Button';

const FirstCarousel = () => {
  
      const [index, setIndex] = useState(0);
      const [direction, setDirection] = useState(null);
    
      const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
      };
    
      return (
        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} className="h-75">
          
          <Carousel.Item className="text-center text-white element-padding">          
            <h1>Producing</h1>
            <h2>Beyond</h2>
            <h1 className="font-style-1">Imagination</h1>
            <Button variant="secondary" size="sm">
              Small button
            </Button>
          </Carousel.Item>
    <Carousel.Item className="text-center text-white element-padding">          
        <h2>Beyond</h2>
       
        <Button variant="secondary" size="sm">
          Small button
        </Button>
    </Carousel.Item>
        </Carousel>
      );
}
 
export default FirstCarousel;
