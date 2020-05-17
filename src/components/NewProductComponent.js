import React from 'react';

export class NewProductComponent extends React.Component {

  render() {
    return(
      <button className="btn btn-outline-success btn-block">
        <img className="plus-img" alt="Agregar" src="../../images/signe.png" />
        Nuevo producto
      </button>
    );
  }

}
