import React from 'react';
import AddIcon from '@material-ui/icons/Add';

export class ProductNewComponent extends React.Component {

  render() {
    return(
      <button className="btn btn-outline-success btn-block">
        <AddIcon />
        Nuevo producto
      </button>
    );
  }

}
