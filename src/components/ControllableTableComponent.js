import React from 'react';
import {HeaderAllComponent} from './HeaderAllComponent';
import {ProductTableComponent} from './ProductTableComponent';
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
        <HeaderAllComponent />
        <Switch>
          <Route exact path="/">
            <PanelComponent searchText={this.state.searchText} onSearchTextChange={this.handleSearchTextChange} />
            <ProductTableComponent products={products} searchText={this.state.searchText} />
          </Route>
          <Route path="/carrito">
            <p>hola</p>
          </Route>
        </Switch>

      </div>
    );
  }

}
