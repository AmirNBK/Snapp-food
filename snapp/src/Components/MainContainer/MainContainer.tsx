'use strict'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Container from '../Container/Cotainer.tsx'
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts } from '../../Redux/Products/ProductsAction.tsx';

const MainContainer = () => {
    const query = {
        "lat": 35.754,
        "long": 51.328
    }
    // const Dispatch = useDispatch();
    // const StoreProducts = useSelector((state) => state.productsState);
    const [pageSize, setPageSize] = useState(5)
    const [page, setPage] = useState(0)
    const [data, setData] = useState()
    const [lat, setLat] = useState(0)
    const [long, setLong] = useState(0)

    // useEffect(() => {
    //     if (!StoreProducts.products.length) {
    //         Dispatch(fetchProducts(query, pageSize, page));
    //     }
    //     console.log("salam")
    // }, []);

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
            test()
        }
    };

    const test = () => {
        axios
            .get(`https://snappfood.ir/mobile/v3/restaurant/vendors-list?extra-filter=&lat=${query.lat}&long=${query.long}&page_size=${pageSize}&page=${page}`)
            .then((response) => {
                setData(response.data.data.finalResult);
                console.log("inja")
            })
            .catch((error) => {

            })
            .then(() => {

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