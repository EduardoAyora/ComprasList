import React from 'react';
import {ProductRowComponent} from './ProductRowComponent';

export class ProductTableComponent extends React.Component {

  render() {
    const products = this.props.products.map(product => <ProductRowComponent product={product} key={product.name} />);
    return(
      <div className="container">
        <div className="row">
          <div className="col">
            <table>
              <tbody>
                {products}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

}
