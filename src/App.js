import React from 'react';
import './App.css';
import {PRODUCTS} from './shared/products';
import {ControllableTable} from './components/ControllableTable';

function App() {
  return (
    <div className="App">
      <ControllableTable products={PRODUCTS} />
    </div>
  );
}

export default App;
