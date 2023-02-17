'use strict'
import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './BlankPage.css'

const BlankPage = () => {
    return (
        <div className='BlankPageContainer'>
            <Link to='/'>
                <button className='BlankPageContainer__button'> بازگشت </button>
            </Link>
        </div>
    )
}
export default BlankPage