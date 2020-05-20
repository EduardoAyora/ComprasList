import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Modal, ModalBody, ModalFooter, ModalHeader, Button} from 'reactstrap';

export class ProductAddAllComponent extends React.Component {

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
    alert("Añadido");
    event.preventDefault();
  }

  render() {
    return(
      <div>
        <button type="submit" className="btn btn-outline-success btn-block" onClick={this.toggleModal}>
          <ShoppingCartIcon />&nbsp;
          Agregar todo al carrito
        </button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Añadir todo</ModalHeader>
          <ModalBody>¿Está seguro que desea añadir todo al carrito?</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleConfirm}>Confirmar</Button>&nbsp;
            <Button color="danger" onClick={this.toggleModal}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
