import {Carousel} from 'react-bootstrap';
import React from 'react'
import slide1 from '../images/slide1.jpg'
import slider3 from '../images/slider3.jpg'
import slider2 from '../images/slider2.jpg'
import './slide.css'
function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='font-bold text-xl text-black'>MULTIPLE HOME APPLIANCE</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='font-bold text-xl text-black'>AFFORDABLE PRICE</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={slider3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='slide3'>ENJOY OUR HOME SERVICES AVAILABLE 24*7</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;