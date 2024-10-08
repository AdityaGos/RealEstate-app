import React from 'react'
import './Filter.scss'
export default function Filter() {
  return (
    <div className='filter'>
        <h1>Search result for <b>London</b></h1>
        <div className="top">
            <div className="item">
                <label htmlFor="city">Location</label>
                <input type="text" id="city" name="city" placeholder='City Location' />
            </div>
        </div>
        <div className="bottom">
        <div className="item">
                <label htmlFor="type">Type</label>
                <select name="type" id="type">
                    <option value="any">Any</option>
                    <option value="buy">Buy</option>
                    <option value="rent">Rent</option>
                </select>
            </div>
            <div className="item">
                <label htmlFor="property">Property</label>
               <select name="property" id="property">
                <option value="any">Any</option>
                <option value="apartment">Apartment</option>
                <option value="flat">Condo</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
               </select>
            </div>
            <div className="item">
                <label htmlFor="minPrice">Min Price</label>
                <input type="text" id="minPrice" name="minPrice" placeholder='City Location' />
            </div>
            <div className="item">
                <label htmlFor="maxPrice">Max Price</label>
                <input type="text" id="maxPrice" name="maxPrice" placeholder='City Location' />
            </div>
            <div className="item">
                <label htmlFor="bedroom">Bedroom</label>
                <input type="text" id="maxPrice" name="maxPrice" placeholder='Any' />
            </div>
        <button>
            <img src="/search.png" alt="" />
        </button>
        </div>
    </div>
  )
}
