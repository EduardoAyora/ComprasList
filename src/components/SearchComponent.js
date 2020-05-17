import React from 'react';

export class SearchComponent extends React.Component {

  render() {
    return(
      <form>
          <input className="form-control" type="text" placeholder="Buscar" />
      </form>
    );
  }

}
