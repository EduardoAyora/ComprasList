import React from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {ProductDeleteComponent} from './ProductDeleteComponent';

export class ProductRowComponent extends React.Component {

  render() {
    const product = this.props.product;
    return(
      <tr>
        <td>
          <button className="btn btn-light">
            <AddShoppingCartIcon fontSize="small" />
          </button>
          &nbsp;
          <button type="button" className="btn btn-link" style={{color: 'green'}}>
            {product.name}
          </button>
          <ProductDeleteComponent />
        </td>
      </tr>
    );
  }

}
