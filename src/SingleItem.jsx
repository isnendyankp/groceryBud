import React, { useState } from 'react'

const SingleItem = ({item, removeItem}) => {
  const [isChecked, setIsChecked] = useState(item.completed)
  return (
    <div className='single-item'>
      <input type="checkbox" />
      <p>{item.name}</p>
      <button className='btn remove-btn' type='button'>
        delete
      </button>
    </div>
  )
}

export default SingleItem

// Progress:
// S7-235: create SingleItem component
// S7-235: add item prop & removeItem prop
// S7-235: Add className single-item to div
// S7-235: Add input checkbox to div
// S7-235: Add p with  pass in item.name to div
// S7-235: Add button with className remove-btn to div
// S7-235: Add isCompleted state to SingleItem component