import React from 'react';

export function CartQuitComponent(){
  return(
    <div className="row mt-4">
      <div className="offset-4 col-4">
        <button type="submit" className="btn btn-outline-success btn-block">
          Quitar seleccionados
        </button>
      </div>
    </div>
  );
}
