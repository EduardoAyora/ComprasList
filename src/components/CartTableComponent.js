import React from 'react';
import {CartRowComponent} from './CartRowComponent';

export class CartTableComponent extends React.Component {

  constructor(props) {
    super(props);
  }

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

}
