import React from 'react';
import {ProductTableComponent} from './ProductTableComponent';

export class ControllableTableComponent extends React.Component {

  render() {
    const products = this.props.products;
    return (
      <div>

        <ProductTableComponent products={products} />
      </div>
    );
  }

}
