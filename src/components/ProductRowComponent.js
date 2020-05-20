import React from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

export class ProductRowComponent extends React.Component {

  render() {
    const product = this.props.product;
    return(
      <tr>
        <td>
          <AddShoppingCartIcon />
          &nbsp; {product.name}
        </td>
      </tr>
    );
  }

}
