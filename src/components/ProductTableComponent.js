import React from 'react';
import {ProductRowComponent} from './ProductRowComponent';

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
