import React from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'
export default function Card({item}) {
  return (
    <div className='card'>
        <Link to={`/${item.id}`} className='imageContainer'>
        <img src={item.img} alt="" />
        </Link>
        <div className="textContainer"></div>
    </div>
  )
}
