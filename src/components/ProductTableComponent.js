import React from 'react';
import {ProductRowComponent} from './ProductRowComponent';

class ProductTableComponent extends React.Component {

  render() {
    const searchText = this.props.searchText.toLowerCase();
    const products = [];
    this.props.products.forEach((product) => {
      const productNorm = product.name.toLowerCase();
      if (productNorm.indexOf(searchText) === -1 || product.inCart === true) {
        return;
      }
      products.push(<ProductRowComponent product={product} key={product.name}
        addClick={this.props.addClick} deleteClick={this.props.deleteClick} />);
    });

    return(
      <div className="container">
        <table className="table">
          <tbody>
            {products}
          </tbody>
        </table>
      </div>
    );
  }

}

export default ProductTableComponent;
