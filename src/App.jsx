import { useState } from "react"; 
import Form from "./Form";
import { nanoid } from "nanoid";

const App = () => {
  const [items, setName] = useState([]);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    setName([...items, newItem]);
  }
  return <section className="section-center">
    <Form addItem={addItem}/>
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
