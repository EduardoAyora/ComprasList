import React from 'react';

export class ProductRowComponent extends React.Component {

  render() {
    const product = this.props.product;
    return(
      <tr>
        <td>
          <img className="carrito-img" alt="carrito" src="../../images/carrito.png" />
          {product.name}
        </td>
      </tr>
    );
  }

}
