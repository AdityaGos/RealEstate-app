import React from 'react'
import Card from '../card/Card'
import {listData} from '../../lib/dummyData'
import './list.scss'
function List() {
  return (
    <div className='list'>
        
        {listData.map(elem=>(
                <Card key={elem.id} item={elem} />


        ))}
    </div>
  )
}

export default List