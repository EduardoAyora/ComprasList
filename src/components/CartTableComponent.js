import React from 'react';
import {CartRowComponent} from './CartRowComponent';
import {CartQuitComponent} from './CartQuitComponent';

export class CartTableComponent extends React.Component {

  render() {
    const products = [];
    this.props.products.forEach((product) => {
      if(product.inCart === true){
        products.push(<CartRowComponent product={product} key={product.name} />);
      }
    });
    return(
      <div className="container">
        <div className="row">
          <div className="col">
            <form>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" />&nbsp;
                <label className="form-check-label">Seleccionar Todo</label>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Pasillo</th>
                </tr>
              </thead>
              <tbody>
                {products}
              </tbody>
            </table>
          </div>
        </div>
        <CartQuitComponent />
      </div>
    );
  }

}
