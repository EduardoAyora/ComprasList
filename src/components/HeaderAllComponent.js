import React from 'react';
import {Navbar} from 'react-bootstrap';
import {Link} from "react-router-dom";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

export class HeaderAllComponent extends React.Component {

  render() {
    return(
      <div>
        <Navbar bg="light" expand="lg">
          <div className="container">
            <Navbar.Brand>
              <Link to="/carrito" className="green">
                <KeyboardArrowLeftIcon fontSize="large" />
                Carrito
              </Link>
            </Navbar.Brand>
          </div>
        </Navbar>
      </div>

    );
  }

}
