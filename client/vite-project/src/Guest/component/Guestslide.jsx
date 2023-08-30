import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function Guestslide() {
  return (
    <Carousel data-bs-theme="dark" className='mb-5'>
    <Carousel.Item>
      <img
        src="https://media.istockphoto.com/id/1314397058/vector/welcoming-guest-at-home-concept-of-landing-page-with-mom-welcome-daughter-at-door-after.jpg?s=612x612&w=0&k=20&c=zSFRwy4D5XaIbGwY2YUnOCRNJmtszP51nuS-rX49FwY="
        alt="First slide"
        className="d-block w-100"
        style={{ objectFit: 'cover', height: '500px' }}
      />
      <Carousel.Caption>
        <h5>Try to login</h5>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        src="https://i.ytimg.com/vi/fEpCHB1JBVI/maxresdefault.jpg"
        alt="Second slide"
        className="d-block w-100"
        style={{ objectFit: 'cover', height: '500px' }}
      />
      <Carousel.Caption>
        <h5>Different types of electronics Brands</h5>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        src="https://www.electronicsandyou.com/blog/wp-content/uploads/2013/07/electronic-companies.jpg"
        alt="Third slide"
        className="d-block w-100"
        style={{ objectFit: 'cover', height: '500px' }}
      />
      <Carousel.Caption>
        <h5>Different type of electronics Brands</h5>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        src="https://www.logolynx.com/images/logolynx/1d/1d010de1c947c673b8682e04a2c2393d.jpeg"
        alt="Fourth slide"
        className="d-block w-100"
        style={{ objectFit: 'cover', height: '500px' }}
      />
      <Carousel.Caption>
        <h5>Different type of electronics Brands</h5>
      </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
  )
}
