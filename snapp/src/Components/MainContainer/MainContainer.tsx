'use strict'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Container from '../Container/Cotainer.tsx'

const MainContainer = () => {
    // const query = {
    //     "page" : 0,
    //     "page_size" : 10,
    //     "lat" : 35.754,
    //     "long" : 51.328
    // }
    const [data, setData] = useState()

    const test = () => {
        axios
            .get(`https://snappfood.ir/mobile/v3/restaurant/vendors-list?extra-filter=&lat=35.774&long=51.41`)
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