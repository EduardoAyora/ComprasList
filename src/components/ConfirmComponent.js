import React from 'react';
import {Modal, ModalBody, ModalFooter, ModalHeader, Button} from 'reactstrap';

/**
Clase ConfirmComponent
Renderiza un boton con un mensaje de confirmacion (modal) y ejecuta la funcion o metodo que le pasemos
Requiere de bootstrap, reactstrap y que le pasemos los siguientes parametros:
header: encabezado del Modal
body: cuerpo o mensaje del Modal
buttonClassName: estilo para el boton
buttonContent: la estructura del boton, puede contener iconos, texto, etc. Utilizar etiqueta <span></span>
buttonAction: lo que se va a ejecutar despues de presionar confirmar en el modal
*/
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
    event.preventDefault();
  }

  render() {
    const buttonAction = this.props.buttonAction;
    return(
      <div>
        <button className={this.props.buttonClassName} onClick={this.toggleModal}>
          {this.props.buttonContent}
        </button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>{this.props.header}</ModalHeader>
          <ModalBody>{this.props.body}</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={ (event)=>{this.handleConfirm(event); buttonAction()} }>
              Confirmar</Button>
            &nbsp;
            <Button color="danger" onClick={this.toggleModal}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

}
