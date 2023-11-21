import { useState } from "react"; 
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";

const setLocalStorage = (items) => {
 localStorage.setItem('list', JSON.stringify(items));
};
const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  }

  const removeItem = (itemId) => {
     const newItems = items.filter((item) => item.id !== itemId);
      setItems(newItems);
      setLocalStorage(newItems);
  };

  return <section className="section-center">
    <Form addItem={addItem}/>
    <Items items={items} removeItem={removeItem} />
    </section>;
};

export default App;

// Progress
// S7-233: Create name state variable
// S7-234: Create section with className="section-center"
// S7-233: Pass Form component into App component
// S7-233: import Form component
// S7-233: create base addItem function
// S7-233: create newItem object
// S7-233: add propertys to newItem object
// S7-233: add newItem to items array
// S7-233: pass addItem function into Form component
// S7-233: change setName to setItems
// S7-233: create removeItem function base
// S7-233: pass removeItem function & items state @Items component
// S7-233: import Items component
// S7-233: Add newItems to filter method in removeItem function
// S7-233: pass newItems to setItems
// S7-237: Create base setLocalStorage function with provide items parameter
// S7-237: Add localStorage.setItem with list & JSON.stringify(items)
// S7-237: Add setLocalStorage & pass in newItems @removeItem function
// S7-237: Add newItems equal to spread operator of items & newItem @addItem function
// S7-237: pass in newItems to setItems @addItem function 
