import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import {ConfirmComponent} from './ConfirmComponent';

export class ProductDeleteComponent extends React.Component {

  render() {
    return(
      <div className="float-right">
        <ConfirmComponent
          header='Eliminar producto' body='¿Está seguro que desea eliminar este producto?'
          buttonClassName="btn btn-light" buttonContent={<DeleteIcon fontSize="small" />}
          buttonAction={this.props.deleteClick}
        />
      </div>
    );
  }

}
