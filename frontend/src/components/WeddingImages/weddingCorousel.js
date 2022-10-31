import React from 'react';
import { Carousel } from 'react-bootstrap';

import wed1 from '../assets/weddingimg/wed1.jpg'
import wed2 from '../assets/weddingimg/wed2.jpg'
import wed3 from '../assets/weddingimg/wed3.jpg'

const WeddingCarouselContainer = () => {
    return (
      <Carousel fade={true} pause={false}>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={wed1}
            alt="First slide"
            style={{ height: "500px", objectFit:"cover" }}
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={wed2}
            alt="Third slide"
            style={{ height: "500px", objectFit:"cover" }}
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={wed3}
            alt="Third slide"
            style={{ height: "500px", objectFit:"cover" }}
          />
          <Carousel.Caption>
  
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
  
  export default WeddingCarouselContainer;