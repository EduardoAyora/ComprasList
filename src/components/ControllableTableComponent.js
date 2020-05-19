import React from 'react';
import {ProductHeaderComponent} from './ProductHeaderComponent';
import {CartHeaderComponent} from './CartHeaderComponent';
import {ProductTableComponent} from './ProductTableComponent';
import {CartTableComponent} from './CartTableComponent';
import {ProductPanelComponent} from './ProductPanelComponent';
import {Switch, Route} from "react-router-dom";

export class ControllableTableComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchText: ''
    }
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
  }

  handleSearchTextChange(input) {
    this.setState({
      searchText: input
    });
  }

  render() {
    const products = this.props.products;
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <ProductHeaderComponent />
            <ProductPanelComponent searchText={this.state.searchText} onSearchTextChange={this.handleSearchTextChange} />
            <ProductTableComponent products={products} searchText={this.state.searchText} />
          </Route>
          <Route path="/carrito">
            <CartHeaderComponent />
            <CartTableComponent products={products} />
          </Route>
        </Switch>
      </div>
    );
  }

}
