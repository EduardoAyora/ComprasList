import React from 'react';
import {HeaderComponent} from './HeaderComponent';
import {ProductTableComponent} from './ProductTableComponent';
import {PanelComponent} from './PanelComponent';

export class ControllableTableComponent extends React.Component {

  render() {
    const products = this.props.products;
    return (
      <div>
        <HeaderComponent />
        <PanelComponent />
        <ProductTableComponent products={products} />
      </div>
    );
  }

}
