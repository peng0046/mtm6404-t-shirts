import React from 'react';
import TShirtList from './TShirtList'; // Import the TShirtList component
import './styles.css'; //Import the CSS


function App() {
  return (
    <div>
      <h1>T-Shirt Store</h1>
      <TShirtList /> {/* This will display the list of t-shirts */}
    </div>
  );
}

export default App;
