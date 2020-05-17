import React from 'react';
import {HeaderComponent} from './HeaderComponent';
import {ProductTableComponent} from './ProductTableComponent';
import {PanelComponent} from './PanelComponent';

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
        <HeaderComponent />
        <PanelComponent searchText={this.state.searchText} onSearchTextChange={this.handleSearchTextChange} />
        <ProductTableComponent products={products} searchText={this.state.searchText} />
      </div>
    );
  }

}
