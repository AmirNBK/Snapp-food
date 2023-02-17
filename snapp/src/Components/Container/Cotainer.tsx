'use strict'
import React from 'react'
import './Container.css'
import food from '../../Assets/Image/food.jpg'
import IconContainer from '../IconContainer/IconContainer.tsx'
import TitleRate from '../TitleRate/TitleRate.tsx'
import { Link } from 'react-router-dom';

const Container = (props: { data: [] }) => {
    const data = props.data

    return (
        <div>
            {data?.slice(1).map((item, index) => {

                return (
                    <Link to='/home' className='Link'>
                        <div className='Container' key={index}>
                            <img className='Container__image' src={`${item.data?.backgroundImage}`} />
                            <div className='Container__icon'> <IconContainer logo={item.data?.defLogo} /> </div>
                            <div> <TitleRate title={item.data.title} rate={item.data.rate} vote={item.data.voteCount} /> </div>
                            <div className='Container__description'> {item.data.description.replaceAll(',', '')} </div>
                            <div className='Container__payment'>
                                <div className='Container__payment__type'> {item.data.isZFExpress ? "ارسال اکسپرس" : "پیک فروشنده"} </div>
                                <div className='Container__payment__price'> {item.data.deliveryFee === 0 ? "رایگان" : item.data.deliveryFee} <div className='Container__payment__price__currency'>
                                    {item.data.deliveryFee === 0 ? "" : "تومان"} </div> </div>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}
export default Container