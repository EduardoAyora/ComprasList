import React from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

export class ProductAddShoppingComponent extends React.Component {

  render() {
    return(
      <button className="btn btn-light" onClick={this.props.addClick}>
        <AddShoppingCartIcon fontSize="small" />
      </button>
    );
  }

}
