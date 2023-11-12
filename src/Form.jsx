import React from 'react'
import { useState } from 'react'

const Form = () => {
  const [newItemName, setNewItemName] = useState('');
  return (
    <form>
      Form
    </form>
  )
}

export default Form


// Progress:
// S7-233: import { useState } from "react";
// S7-233: create newItemName state variable
// S7-233: change div into form