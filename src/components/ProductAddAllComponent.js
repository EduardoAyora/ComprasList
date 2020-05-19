import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export class ProductAddAllComponent extends React.Component {
  render() {
    return(
      <button type="submit" className="btn btn-outline-success btn-block">
        <ShoppingCartIcon />
        Agregar todo a carro
      </button>
    );
  }
}
