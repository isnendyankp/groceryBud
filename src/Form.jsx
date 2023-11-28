import { useState } from 'react';
import { toast } from 'react-toastify';

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) {
      toast.error('please provide value');
      return;
    }
    addItem(newItemName);
    setNewItemName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text "
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
};
export default Form;

// Progress:
// S7-233: import { useState } from "react";
// S7-233: create newItemName state variable
// S7-233: change div into form
// S7-233: add h4 with text "grocery bud"
// S7-233: add div with className="form-control"
// S7-233: add input with type text and CN form-input
// S7-233: pass in newItemName as value @input
// S7-233: add onChange event to input
// S7-233: add button with type submit and CN btn
// S7-233: create handleSubmit function
// S7-233: add onSubmit event to form
// S7-233: add addItem prop to Form component
// S7-233: add if statement to handleSubmit
// S7-233: add newItemName to addItem @handleSubmit
// S7-240: Import toast from react-toastify
// s7-240: pass in toast error for if statement @handleSubmit
// s7-240: add setNewItemName @handleSubmit
// s7-240: change parameter event to e @handleSubmit
