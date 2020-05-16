import React from 'react';

export class ProductRow extends React.Component {

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
