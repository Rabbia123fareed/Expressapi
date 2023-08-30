import React, { useEffect, useState } from 'react'
import Cards from '../component/Cards'
import axios from 'axios'
import Brandslides from '../component/Brandslides'
export default function Brands() {
   

    const [data, setData] = useState([])
    
    useEffect(() => {
        axios.get('/api/getallbrands')
            .then(json => setData(json.data.brands))
            .catch(err => alert(err.message))
    }, [])




    return (
        <div className="container my-5" >
            <div className="text-center">
                <h2>Brands</h2>
                <small className="text-secondary">See All Brands</small>
            </div>
            <Brandslides/>

            <div className="row my-5">
                {
                    data && data.length > 0 &&
                    data.map((val, key) => <Cards key={key} image={val.Brandimage} name={val.Brandname} />)
                }

            </div>
        </div>
    )
}