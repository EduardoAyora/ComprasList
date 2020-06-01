import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {ConfirmComponent} from './ConfirmComponent';

export class ProductAddAllComponent extends React.Component {

  render() {
    return(
      <ConfirmComponent
        header='Añadir todo' body='¿Está seguro que desea añadir todo al carrito?'
        buttonClassName="btn btn-outline-success btn-block"
        buttonContent={
          <span>
            <ShoppingCartIcon />&nbsp;
            Agregar todo al carrito
          </span>
        }
        handleClick={this.props.addAllClick}
      />
    );
  }

}
