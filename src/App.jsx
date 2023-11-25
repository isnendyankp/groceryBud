import { useState } from "react"; 
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    list = JSON.parse(localStorage.getItem('list'));
  } else {
    list = [];
  }
  return list;
};

const setLocalStorage = (items) => {
 localStorage.setItem('list', JSON.stringify(items));
};
const defaultList = JSON.parse(localStorage.getItem('list') || '[]');
const App = () => {
  const [items, setItems] = useState(defaultList);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
  }

  const removeItem = (itemId) => {
     const newItems = items.filter((item) => item.id !== itemId);
      setItems(newItems);
      setLocalStorage(newItems);
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = {...item, completed: !item.completed};
      }
      return item;
    });
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
// S7-238: Add newItems equal to spread operator of items & newItem @addItem function
// S7-238: pass in newItems to setItems @addItem function
// S7-238: Add setLocalStorage & pass in newItems @addItem function
// S7-238: Create getLocalStorage function base
// S7-238: create list variable equal to localStorage.getItem('list') @getLocalStorage function
// S7-238: Add if statement to check if list is true
// S7-238: Add list to retrieve item from localStorage with key 'list'
// S7-238: Add else statement to set list to empty array
// S7-238: Add return list @getLocalStorage function 
// S7-238: Add getLocalStorage to default value @App component> items state
// S7-238: create defaultList variable equal to JSON.parse(localStorage.getItem('list') || '[]')
// s7-238: pass in defaultList value to items state
// S7-239: create editItem function base
// S7-239: pass itemId to editItem function
// S7-239: create newItems with map over items
// S7-239: pass in item to map over method @editItem function
// S7-239: Add if statement to check if item.id is equal to itemId
// S7-239: Add return item @editItem function
// S7-239: Add new variable newItem equal to spread operator of item & completed property