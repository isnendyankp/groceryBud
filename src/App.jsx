import { useState } from "react"; 
import Form from "./Form";

const App = () => {
  const [name, setName] = useState([]);

  const addItem = (itemName) => {
    
  }
  return <section className="section-center">
    <Form />
    </section>;
};

export default App;

// Progress
// S7-233: Create name state variable
// S7-234: Create section with className="section-center"
// S7-233: Pass Form component into App component
// S7-233: import Form component
// S7-233: create base addItem function
