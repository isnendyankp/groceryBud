import React from 'react'
import { useState } from 'react'

const Form = () => {
  const [newItemName, setNewItemName] = useState('');
  return (
    <form>
      <h4>grocery bud</h4>
    </form>
  )
}

export default Form


// Progress:
// S7-233: import { useState } from "react";
// S7-233: create newItemName state variable
// S7-233: change div into form
// S7-233: add h4 with text "grocery bud"