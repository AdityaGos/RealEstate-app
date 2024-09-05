import React from 'react'
import './slider.scss'
export default function Slider({image}) {
  return (
   <div className="slider">
    <div className="fullSlider">
        <div className="arrow">
            <img src="/arrow.png" alt="" />
        </div>
        <div className="imageContainer">
            <img src={image[0]} alt="" />
        </div>
        <div className="arrow">
        <img src="/arrow.png" alt="" />

        </div>
    </div>
    <div className="bigImage">
        <img src={image[0]} alt="" />
    </div>
    <div className="smallImages">
        {image.slice(1).map((img,index)=> (
            <img src={img} key={index} alt='' /> ))}
    </div>
   </div>
  )
}
