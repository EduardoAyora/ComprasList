import React from 'react';
import {ProductRowComponent} from './ProductRowComponent';
import {TableComponent} from './TableComponent';

export class ProductTableComponent extends React.Component {

  render() {
    const searchText = this.props.searchText.toLowerCase();
    const products = [];
    this.props.products.forEach((product) => {
      const productNorm = product.name.toLowerCase();
      if (productNorm.indexOf(searchText) === -1) {
        return;
      }
      products.push(<ProductRowComponent product={product} key={product.name} />);
    });

    return(
      <TableComponent products={products} />
    );
  }

}
