import React from 'react';
import './App.css';
import Header from './Header';
import InventoryControl from './InventoryControl';

const bodyStyle = {
  backgroundColor: "#0F4C81",
  padding: "20px",
  color: "#F1F1E6"
};

function App() {
  return (
    <React.Fragment>
      <div style={bodyStyle}>
        <Header />
        <hr />
        <InventoryControl />
      </div>
    </React.Fragment>
  );
}

export default App;
