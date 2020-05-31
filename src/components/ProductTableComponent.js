import React from 'react';
import {ProductRowComponent} from './ProductRowComponent';
import { Loading } from './LoadingComponent';

class ProductTableComponent extends React.Component {

  render() {
    const searchText = this.props.searchText.toLowerCase();
    const products = [];
    this.props.products.forEach((product) => {
      const productNorm = product.name.toLowerCase();
      if (productNorm.indexOf(searchText) === -1 || product.inCart == 1) {
        return;
      }
      products.push(<ProductRowComponent product={product} key={product.name}
        addClick={this.props.addClick} deleteClick={this.props.deleteClick} />);
    });
    if(this.props.productsLoading){
      return (
        <div className="container">
          <div className="row justify-content-center">
            <Loading />
          </div>
        </div>
      );
    }
    else if (this.props.productsErrMess) {
      return (
        <div className="container">
         <div className="row justify-content-center">
           <h4>{this.props.productsErrMess}</h4>
         </div>
        </div>
      );
    }
    else if (this.props.products != null){
      return (
        <div className="container">
          <table className="table">
            <tbody>
              {products}
            </tbody>
          </table>
        </div>
      );
    }
    else {
      return(<div></div>);
    }

  }

}

export default ProductTableComponent;
