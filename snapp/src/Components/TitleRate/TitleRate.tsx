'use strict'
import React from 'react'
import './TitleRate.css'
import star from '../../Assets/Image/star.svg'

const TitleRate = (props: { title: any , rate : number}) => {
    const title = props.title
    const rate = props.rate
    return (
        <div className='TitleRate'>
            <div className='TitleRate__title'> {title} </div>
            <div className='TitleRate__rate'>
                <div className='TitleRate__rate__rateContainer'>
                    <img src={star} className='TitleRate__rate__rateContainer__icon'/>
                    <div className='TitleRate__rate__rateContainer__rateNum'> {rate} </div>
                </div>
            </div>
        </div>
    )
}
export default TitleRate