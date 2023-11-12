import { useState } from "react"; 

const App = () => {
  const [name, setName] = useState([]);
  return <section className="section-center">
    <Form />
    </section>;
};

export default App;

// Progress
// S7-233: Create name state variable
// S7-234: Create section with className="section-center"
// S7-235: Pass Form component into App component
