import React from 'react';

export function CartQuitComponent(props){
  return(
    <div className="row mt-4 mb-4">
      <div className="offset-4 col-4">
        <button className="btn btn-outline-success btn-block" onClick={props.goneClick}>
          Quitar seleccionados
        </button>
      </div>
    </div>
  );
}
