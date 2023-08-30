import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function Slides() {
  return (
    <Carousel data-bs-theme="dark" className='mb-5'>
    <Carousel.Item>
      <img
        src="https://www.twice.com/wp-content/uploads/2019/11/watches.jpg"
        alt="First slide"
        className="d-block w-100"
        style={{ objectFit: 'cover', height: '400px' }}
      />
      <Carousel.Caption>
        <h5>Different type of electronics categories</h5>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        src="https://www.dqindia.com/wp-content/uploads/2016/10/electronics.jpg"
        alt="Second slide"
        className="d-block w-100"
        style={{ objectFit: 'cover', height: '400px' }}
      />
      <Carousel.Caption>
        <h5>Different types of electronics categories</h5>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        src="https://i.pinimg.com/600x315/9a/13/dc/9a13dc79ca4368d6c87acb2e52cadf9d.jpg"
        alt="Third slide"
        className="d-block w-100"
        style={{ objectFit: 'cover', height: '400px' }}
      />
      <Carousel.Caption>
        <h5>Different type of electronics categories</h5>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        src="https://img.freepik.com/premium-photo/white-background-with-various-electronics-headphones_875722-18926.jpg"
        alt="Fourth slide"
        className="d-block w-100"
        style={{ objectFit: 'cover', height: '400px' }}
      />
      <Carousel.Caption>
        <h5>Different type of electronics categories</h5>
      </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
  )
}
