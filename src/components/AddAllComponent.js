import React from 'react';

export class AddAllComponent extends React.Component {
  render() {
    return(
      <div>
        <button type="submit" className="btn btn-outline-success btn-block">
          <img className="carrito-img" src="../../images/carrito.png" alt="carro" />
          Agregar todo a carro
        </button>
      </div>
    );
  }
}
