import React from 'react'
import './homePage.scss'
import SearchBar from '../../components/searchBar/searchBar'
export default function homePage() {
  return (
    <div className='homePage'>
        <div className="textContainer">
            <div className="wrapper">
                <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda voluptas vitae deserunt deleniti fugit iste minus expedita ad repellendus, sapiente animi explicabo sequi eveniet facere, voluptatum commodi praesentium ipsum quaerat.</p>
              <SearchBar/>
              <div className="boxes">
                <div className="box">
                    <h1>16+</h1>
                    <h2>Year of Experience</h2>
                </div>
                <div className="box">
                    <h1>200</h1>
                    <h2>Award Gained</h2>
                </div>
                <div className="box">
                    <h1>1200+</h1>
                    <h2>Property Ready</h2>
                </div>
              </div>
                </div>
        </div>
        <div className="imgContainer">
            <img src="/bg.png" alt="" />
        </div>
    </div>
  )
}
