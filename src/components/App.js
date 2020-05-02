import React from 'react';
import './App.css';
import Header from './Header';
import InventoryControl from './InventoryControl';

function App() {
  return (
    <React.Fragment>
      <div>
        <Header />
        <hr />
        <InventoryControl />
      </div>
    </React.Fragment>
  );
}

export default App;