import React from 'react';
import './App.css';
import {PRODUCTS} from './shared/products';
import {ControllableTableComponent} from './components/ControllableTableComponent';

function App() {
  return (
    <div className="App">
      <ControllableTableComponent products={PRODUCTS} />
    </div>
  );
}

export default App;
