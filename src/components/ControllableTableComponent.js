import React from 'react';
import {HeaderAllComponent} from './HeaderAllComponent';
import {HeaderCartComponent} from './HeaderCartComponent';
import {ProductTableComponent} from './ProductTableComponent';
import {CartTableComponent} from './CartTableComponent';
import {PanelComponent} from './PanelComponent';
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
            <HeaderAllComponent />
            <PanelComponent searchText={this.state.searchText} onSearchTextChange={this.handleSearchTextChange} />
            <ProductTableComponent products={products} searchText={this.state.searchText} />
          </Route>
          <Route path="/carrito">
            <HeaderCartComponent />
            <CartTableComponent products={products} />
          </Route>
        </Switch>

      </div>
    );
  }

}
