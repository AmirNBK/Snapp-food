'use strict'
import React from 'react'
import './Container.css'
import food from '../../Assets/Image/food.jpg'
import IconContainer from '../IconContainer/IconContainer.tsx'
import TitleRate from '../TitleRate/TitleRate.tsx'

const Container = (props: { data: [] }) => {
    const data = props.data
    // console.log(data)

    return (
        <div>
            {data?.slice(1).map((item, index) => {
                console.log(item.data.rate)

                return (
                    <div className='Container' key={index}>
                        <img className='Container__image' src={`${item.data?.backgroundImage}`} />
                        <div className='Container__icon'> <IconContainer logo={item.data?.defLogo} /> </div>
                        <div> <TitleRate title={item.data.title} rate={item.data.rate}/> </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Container