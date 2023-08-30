import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from 'axios'
import Categoryslides from './Categoryslides'

export default function Category() {
   
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('/api/getallcategory')
            .then(json => setData(json.data.category))
            .catch(err => alert(err.message))
    }, [])

    return (
        <div className="container my-5">
            <div className="text-center">
                <h2>Category</h2>
                <small className="text-secondary">See All Categories</small>
            </div>
            <Categoryslides/>

            <div className="row my-5">

                {
                    data && data.length > 0 &&
                    data?.map((val, key) => <Cards key={key} image={val.CategoryImage } name={val.CategoryName } />)
                }

            </div>
        </div>
    )
}

