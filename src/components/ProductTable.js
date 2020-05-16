import React from 'react';
import {ProductRow} from './ProductRow';

export class ProductTable extends React.Component {

  render() {
    const products = this.props.products.map(product => <ProductRow product={product} key={product.name} />);
    return(
      <div>
        <table>
          <tbody>
            {products}
          </tbody>
        </table>
      </div>
    );
  }

}
