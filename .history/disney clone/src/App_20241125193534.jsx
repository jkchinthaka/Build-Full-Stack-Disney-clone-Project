/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import Header from './Components/Head'; // Import the default export 'Header'

function App() {
  const [count, setCount] = useState(0); // You can remove this if unused

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
