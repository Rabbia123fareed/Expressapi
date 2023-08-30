import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function Slides() {
  return (
    <Carousel data-bs-theme="dark" className='mb-5'>
    <Carousel.Item>
      <img
        src="https://t3.ftcdn.net/jpg/04/02/94/78/360_F_402947882_jOnPlrpV0wL5doEzAl7UdFVQpKu5hBjG.jpg"
        alt="First slide"
        className="d-block w-100"
        style={{ objectFit: 'cover', height: '400px' }}
      />
      <Carousel.Caption>
        <h5>Different type of electronics Brands</h5>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        src="https://i.ytimg.com/vi/fEpCHB1JBVI/maxresdefault.jpg"
        alt="Second slide"
        className="d-block w-100"
        style={{ objectFit: 'cover', height: '400px' }}
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
        style={{ objectFit: 'cover', height: '400px' }}
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
        style={{ objectFit: 'cover', height: '400px' }}
      />
      <Carousel.Caption>
        <h5>Different type of electronics Brands</h5>
      </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
  )
}
