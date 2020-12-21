import Git from '../img/git.svg'


import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalAuth = (props) => {
  const {
    buttonLabel = "Вход через социальные сети",
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

  return (
    <div>
      <Button className="signButton blue"
        size="sm" onClick={toggle} outline>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className="modal-dialog-centered" >
        <ModalHeader toggle={toggle} close={closeBtn}>Выберите способ авторизации</ModalHeader>
        <ModalBody>
          <a href="http://localhost:3000/auth/github"><img src={Git} alt="git-icon" /></a>
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalAuth;
