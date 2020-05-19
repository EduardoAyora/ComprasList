import React from 'react';

export function TableComponent(props) {
  const products = props.products;
  return(
    <div className="container">
      <div className="row">
        <div className="col">
          <table className="table">
            <tbody>
              {products}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
