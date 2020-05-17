import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export class AddAllComponent extends React.Component {
  render() {
    return(
      <div>
        <button type="submit" className="btn btn-outline-success btn-block">
          <ShoppingCartIcon />
          Agregar todo a carro
        </button>
      </div>
    );
  }
}
