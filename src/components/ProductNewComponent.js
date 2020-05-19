import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Modal from 'react-bootstrap/Modal';

export class ProductNewComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        isModalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleHi = this.handleHi.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleHi(event) {
      this.toggleModal();
      alert("si");
      event.preventDefault();
  }

  render() {
    return(
      <div>
        <button className="btn btn-outline-success btn-block" onClick={this.toggleModal}>
          <AddIcon />
          <span className="fa fa-sign-in fa-lg"></span>
          Nuevo producto
        </button>
        <Modal show={this.state.isModalOpen} onHide={this.toggleModal} animation="false">
          <Modal.Header>Login</Modal.Header>
          <Modal.Body>Esto es un texto</Modal.Body>
          <Modal.Footer>
            <button onClick={this.handleHi}>hi</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

}
