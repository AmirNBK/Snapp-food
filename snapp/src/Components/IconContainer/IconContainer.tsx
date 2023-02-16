'use strict'
import './IconContainer.css'
import React from 'react'

const IconContainer = (props : {logo : any}) => {
    const logo = props.logo

    return (
        <div className='IconContainer'>
            <img src={`${logo}`} className='IconContainer__logo' />
        </div>
    )
}
export default IconContainer