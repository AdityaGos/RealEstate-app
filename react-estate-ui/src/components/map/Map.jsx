import React from 'react'
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import './map.scss'
import "leaflet/dist/leaflet.css"
import Pin from '../pin/Pin'


export default function Map({item}) {
    console.log(item)
    const position = [51.505, -0.09]
  return (
    <MapContainer className='map' center={position} zoom={6} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
   {item.map(elem=>( <Pin key={elem.id} item={elem} /> ))}
  </MapContainer>
  )
}
