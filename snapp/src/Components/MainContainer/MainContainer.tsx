'use strict'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Container from '../Container/Cotainer.tsx'

const MainContainer = () => {
    const query = {
        "lat": 35.754,
        "long": 51.328
    }
    const [pageSize, setPageSize] = useState(5)
    const [page,setPage] = useState(0)
    const [data, setData] = useState()

    const [lat, setLat] = useState(0)
    const [long, setLong] = useState(0)

    const getPosition = (position) => {
        setLat(position.coords.latitude)
        setLong(position.coords.longitude)
    }

    window.navigator.geolocation
        .getCurrentPosition(getPosition);

    window.onscroll = function () {
        var d = document.documentElement;
        var offset = d.scrollTop + window.innerHeight;
        var height = d.offsetHeight;

        if (offset >= height - 1) {
            setPageSize(pageSize + 5)
            setPage(page + 1)
            test()
        }
    };

    const test = () => {
        axios
            .get(`https://snappfood.ir/mobile/v3/restaurant/vendors-list?extra-filter=&lat=${query.lat}&long=${query.long}&page_size=${pageSize}&page=${page}`)
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
    }, [pageSize])
    return (
        <div className='MainContainer'>
            <Container data={data} />
        </div>
    )
}
export default MainContainer