import React from 'react';
import {Navbar} from 'react-bootstrap';

export class HeaderComponent extends React.Component {

  render() {
    return(
      <div>
        <Navbar bg="light" expand="lg">
          <div className="container">
            <Navbar.Brand>Todos mis productos</Navbar.Brand>
          </div>
        </Navbar>
      </div>

    );
  }

}
