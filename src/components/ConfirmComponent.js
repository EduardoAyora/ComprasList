import React from 'react';
import {Modal, ModalBody, ModalFooter, ModalHeader, Button} from 'reactstrap';

export class ConfirmComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        isModalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleConfirm(event) {
    this.toggleModal();
    alert("Enviar metodo");
    event.preventDefault();
  }

  render() {
    return(
      <div>
        <button className={this.props.buttonClassName} onClick={this.toggleModal}>
          {this.props.buttonContent}
        </button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>{this.props.header}</ModalHeader>
          <ModalBody>{this.props.body}</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleConfirm}>Confirmar</Button>&nbsp;
            <Button color="danger" onClick={this.toggleModal}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

}
