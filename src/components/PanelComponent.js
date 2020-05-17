import React from 'react';
import {AddAllComponent} from './AddAllComponent';
import {NewProductComponent} from './NewProductComponent';
import {SearchComponent} from './SearchComponent';

export class PanelComponent extends React.Component {

  render() {
    return(
      <div className="container">
        <div className="row mt-4 mb-4">
          <div className="col">
            <SearchComponent searchText={this.props.searchText} onSearchTextChange={this.props.onSearchTextChange} />
          </div>
        </div>
        <div className="row mt-4 mb-4">
          <div className="col-12 col-md-6 mb-4">
            <AddAllComponent />
          </div>
          <div className="col-12 col-md-6 mb-4">
            <NewProductComponent />
          </div>
        </div>
      </div>
    );
  }

}
