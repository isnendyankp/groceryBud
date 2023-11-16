import React, { useState } from 'react'

const SingleItem = ({item, removeItem}) => {
  const [isChecked, setIsChecked] = useState(item.completed)
  return (
    <div className='single-item'>
      <input type="checkbox" checked={isChecked} />
      <p>{item.name}</p>
      <button className='btn remove-btn' type='button'>
        delete
      </button>
    </div>
  )
}

export default SingleItem

// Progress:
// S7-236: create SingleItem component
// S7-236: add item prop & removeItem prop
// S7-236: Add className single-item to div
// S7-236: Add input checkbox to div
// S7-236: Add p with  pass in item.name to div
// S7-236: Add button with className remove-btn to div
// S7-236: Add isCompleted state to SingleItem component
// S7-236: Add isChecked to input checkbox