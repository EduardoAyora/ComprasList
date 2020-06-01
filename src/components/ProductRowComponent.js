import React from 'react';
import {ProductDeleteComponent} from './ProductDeleteComponent';
import {ProductAddShoppingComponent} from './ProductAddShoppingComponent';

export class ProductRowComponent extends React.Component {

  render() {
    const product = this.props.product;
    return(
      <tr>
        <td>
          <ProductAddShoppingComponent addClick={this.props.addClick} />
          &nbsp;
          <button type="button" className="btn btn-link" style={{color: 'green'}}>
            {product.name}
          </button>
          <ProductDeleteComponent deleteClick={this.props.deleteClick} productId={product.id}
            postDeleteProduct={this.props.postDeleteProduct} />
        </td>
      </tr>
    );
  }

}
