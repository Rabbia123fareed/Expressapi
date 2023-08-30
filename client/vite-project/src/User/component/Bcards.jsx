import React from 'react';
import { Link } from 'react-router-dom';

export default function Bcards({name, image,  price, url }) {
    console.log('Image URL:', image); 
    return (
        <div className="col-md-3 mx-3 mt-2" data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
            <Link to={url} className="text-decoration-none">
                <div className="card bg-warning">
                    <img
                        src={image}
                        className="card-img-top p-2"
                        alt={name}
                        style={{ height: '20vh', objectFit: 'contain' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <div className="div">  
                            <p className="card-text">Price: ${price}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}