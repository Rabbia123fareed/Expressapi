import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
export default function Cards({ name, image, url }) {
    return (
        <div className="col-md-3"  data-aos="flip-down">
            <Link to={url} className='text-decoration-none' >
                <Card style={{ width: '100%', height: '100%' }} className='bg-primary' >
                  <Card.Img variant="top" src={image} style={{  width: '100%', height: '30vh', objectFit: 'contain' }} />
                  <Card.Body className='bg-dark'>
                  <Card.Title className='bg-warning'>{name}</Card.Title>
                    {/* <Button variant="primary">See More</Button> */}
                  </Card.Body>
                </Card>
            </Link>
        </div>
    )
}