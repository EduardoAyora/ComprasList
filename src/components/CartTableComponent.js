import React from 'react';
import {CartRowComponent} from './CartRowComponent';
import {TableComponent} from './TableComponent';

export class CartTableComponent extends React.Component {

  render() {
    const products = [];
    this.props.products.forEach((product) => {
      if(product.inCart === true){
        products.push(<CartRowComponent product={product} key={product.name} />);
      }
    });
    return(
      <TableComponent products={products} />
    );
  }

}
