import React from 'react';
import {Navbar} from 'react-bootstrap';

export function HeaderComponent(props) {
  return(
    <Navbar bg="light" expand="lg">
      <div className="container">
        <Navbar.Brand className={props.align}>
          {props.children}
        </Navbar.Brand>
      </div>
    </Navbar>
  );
}
