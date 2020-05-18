import React from 'react';
import {Navbar} from 'react-bootstrap';
import {Link} from "react-router-dom";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

export class HeaderCartComponent extends React.Component {

  render() {
    return(
      <div>
        <Navbar bg="light" expand="lg">
          <div className="container">
            <Navbar.Brand className="ml-auto">
              <div>
              <Link to="/" className="green">
                  Todos mis artículos
                  <KeyboardArrowRightIcon fontSize="large" />
              </Link>
              </div>
            </Navbar.Brand>
          </div>
        </Navbar>
      </div>

    );
  }

}
