import React from 'react'
import SingleItem from './SingleItem'

const Items = ({items, removeItem}) => {
  return (
    <div className='items'>
        {items.map((item) => {
            return <SingleItem />
        })}
    </div>
  )
}

export default Items

// Progress:
// S7-235: create Items component
// S7-235: add items prop & removeItem prop
// S7-235: import SingleItem component
// S7-235: Add className items to div
// S7-235: map over items array
// S7-235: Add return SingleItem component @map method