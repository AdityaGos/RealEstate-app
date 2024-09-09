import React, { useState } from "react";
import "./slider.scss";
export default function Slider({ image }) {
  const [imageIndex, setImageIndex] = useState(null);

  function changeSlide(direction) {
    setImageIndex((prev) => {
      if (direction === "left") {
        return prev === 0 ? image.length - 1 : prev - 1;
      } else {
        return prev === image.length - 1 ? 0 : prev + 1;
      }
    });
  }
  
  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow">
            <img src="/arrow.png" onClick={() => changeSlide("left")} alt="" />
          </div>
          <div className="imageContainer">
            <img src={image[imageIndex]} alt="" />
          </div>
          <div className="arrow">
            <img
              src="/arrow.png"
              onClick={() => changeSlide("right")}
              className="right"
              alt=""
            />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="bigImage">
        <img src={image[0]} alt="" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImages">
        {image.slice(1).map((img, index) => (
          <img
            src={img}
            key={index}
            alt=""
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}
