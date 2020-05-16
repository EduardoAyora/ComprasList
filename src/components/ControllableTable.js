import React from 'react';
import {ProductTable} from './ProductTable';

export class ControllableTable extends React.Component {

  render() {
    const products = this.props.products;
    return (
      <ProductTable products={products} />
    );
  }

}
