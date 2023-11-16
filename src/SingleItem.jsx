import React from 'react'

const SingleItem = ({item, removeItem}) => {
  return (
    <div className='single-item'>
      <input type="checkbox" />
    </div>
  )
}

export default SingleItem

// Progress:
// S7-235: create SingleItem component
// S7-235: add item prop & removeItem prop
// S7-235: Add className single-item to div
// S7-235: Add input checkbox to div