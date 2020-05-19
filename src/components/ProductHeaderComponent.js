import React from 'react';
import {Link} from "react-router-dom";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import {HeaderComponent} from './HeaderComponent';

export class ProductHeaderComponent extends React.Component {

  render() {
    return(
      <HeaderComponent align="mr-auto">
        <Link to="/carrito" className="green">
          <KeyboardArrowLeftIcon fontSize="large" />
          Carrito
        </Link>
      </HeaderComponent>
    );
  }

}
