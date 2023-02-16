'use strict'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Container from '../Container/Cotainer.tsx'

const MainContainer = () => {
    const query = {
        "page": 0,
        "page_size": 5,
        "lat": 35.754,
        "long": 51.328
    }
    const [lat, setLat] = useState("")
    const [long, setLong] = useState("")
    const [data, setData] = useState()


    const test = () => {
        axios
            .get(`https://snappfood.ir/mobile/v3/restaurant/vendors-list?extra-filter=&lat=${query.lat}4&long=${query.long}&page_size=${query.page_size}&page=${query.page}`)
            .then((response) => {
                setData(response.data.data.finalResult)
            })
            .catch((error) => {

            })
            .then(() => {
                // always executed
            })
    }
    useEffect(() => {
        test()
    }, [])
    return (
        <div className='MainContainer'>
            <Container data={data} />
        </div>
    )
}
export default MainContainer