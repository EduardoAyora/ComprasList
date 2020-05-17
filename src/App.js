import React from 'react';
import './App.css';
import {PRODUCTS} from './shared/products';
import {ControllableTableComponent} from './components/ControllableTableComponent';
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ControllableTableComponent products={PRODUCTS} />
      </div>
    </BrowserRouter>
  );
}

export default App;
