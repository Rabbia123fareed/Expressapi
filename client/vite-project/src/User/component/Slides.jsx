import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function Slides() {
  return (
    <Carousel data-bs-theme="dark" className='mb-5'>
    <Carousel.Item>
      <img
        src="https://7esl.com/wp-content/uploads/2020/12/Electronic-Devices-1.jpg"
        alt="First slide"
        className="d-block w-100"
        style={{ objectFit: 'cover', height: '400px' }}
      />
      <Carousel.Caption>
        <h5>Different type of electronics</h5>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        src="https://www.shift4shop.com/2015/images/industries/electronics/techsave.jpg"
        alt="Second slide"
        className="d-block w-100"
        style={{ objectFit: 'cover', height: '400px' }}
      />
      <Carousel.Caption>
        <h5>Different types of laptops</h5>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        src="https://cdn.motocms.com/src/868x580/66500/66564-original-1200.jpg"
        alt="Third slide"
        className="d-block w-100"
        style={{ objectFit: 'cover', height: '400px' }}
      />
      <Carousel.Caption>
        <h5>Different type of watches</h5>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        src="https://www.uipixels.com/wp-content/uploads/2017/10/Electronics-eCommerce-Website-PSD.jpg"
        alt="Fourth slide"
        className="d-block w-100"
        style={{ objectFit: 'cover', height: '400px' }}
      />
      <Carousel.Caption>
        <h5>You need any thing contect us</h5>
      </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
  )
}
