import React from 'react'
import { useState } from 'react'

const Form = () => {
  const [newItemName, setNewItemName] = useState('');
  return (
    <form>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
      </div>
    </form>
  );
}

export default Form


// Progress:
// S7-233: import { useState } from "react";
// S7-233: create newItemName state variable
// S7-233: change div into form
// S7-233: add h4 with text "grocery bud"
// S7-233: add div with className="form-control"
// S7-233: add input with type text and CN form-input
// S7-233: pass in newItemName as value @input
// S7-233: add onChange event to input