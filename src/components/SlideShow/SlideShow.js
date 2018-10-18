import React from 'react';
import { Zoom } from 'react-slideshow-image';
import "./SlideShow.css"

const images = [
  'images/banner.jpg',
  'images/Banner-Rome.jpg',
];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
}

const Slideshow = () => {
    return (
      <div className="img"><Zoom {...zoomOutProperties}>
        {
          images.map((each, index) => <img key={index} src={each} alt={index} />)
        }
      </Zoom></div>
    )
}
export default Slideshow
