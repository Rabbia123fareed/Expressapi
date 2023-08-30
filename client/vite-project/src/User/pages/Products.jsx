
import React, { useEffect, useState } from 'react'
import Bcards from '../component/Bcards'
import axios from 'axios'
import Productslides from '../component/Productslides'


export default function Products() {
    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get(`/api/getallproduct`)
            .then(json => setdata(json.data. category))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="container my-5">
            <div className="text-center">
                <h2>Products</h2>
                <small className="text-secondary">See All Products</small>
            </div>
            <Productslides/>

            <div className="row my-5">
                {
                   data &&  data.length > 0 && 
                    data?.map((val, key) => <Bcards  key={key} image={val. thumbnail} name={val.name} url={`/products/${val._id}`}/>)
                }

            </div>
        </div>
    )
}
