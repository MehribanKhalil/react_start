import React from 'react'
import './index.css'

const Card = ({img,title,rating}) => {
  return (
    <div className='card'>
        <div className='cardImg'>
            <img src={img} alt="" />
        </div>
        <div>
            <h2>{title}</h2>
        </div>
        <div>
            <h4>{rating}</h4>
        </div>
    </div>
  )
}

export default Card