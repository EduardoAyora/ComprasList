import React from 'react';

export class ProductRowComponent extends React.Component {

  render() {
    const product = this.props.product;
    return(
      <tr>
        <td>
          {product.name}
        </td>
      </tr>
    );
  }

}
