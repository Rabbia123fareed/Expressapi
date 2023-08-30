import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function Slides() {
  return (
    <Carousel data-bs-theme="dark" className='mb-5'>
    <Carousel.Item>
      <img
        src="https://static-01.daraz.pk/other/shop/ecf60fe2f03ef6ee81e151bb3ca132b9.png_760x760q75.jpg_.webp"
        alt="First slide"
        className="d-block w-100"
        style={{ objectFit: 'cover', height: '400px' }}
      />
      <Carousel.Caption>
        <h5>itel product</h5>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        src="https://m-cdn.phonearena.com/images/article/78382-wide-two_1200/Samsung-Galaxy-S-series-evolution.jpg"
        alt="Second slide"
        className="d-block w-100"
        style={{ objectFit: 'cover', height: '400px' }}
      />
      <Carousel.Caption>
        <h5>Samsung products</h5>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        src="https://c8.alamy.com/comp/D1W27J/berlin-germany-booth-for-lg-home-appliances-at-ifa-2009-D1W27J.jpg"
        alt="Third slide"
        className="d-block w-100"
        style={{ objectFit: 'cover', height: '400px' }}
      />
      <Carousel.Caption>
        <h5>LG products</h5>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        src="https://orient.com.pk/cdn/shop/files/590x360.jpg?v=1670300644"
        alt="Fourth slide"
        className="d-block w-100"
        style={{ objectFit: 'cover', height: '400px' }}
      />
      <Carousel.Caption>
        <h5>Orients products</h5>
      </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
  )
}
