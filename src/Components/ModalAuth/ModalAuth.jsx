import Git from '../img/git.svg'
import Google from '../img/google-icon.svg'

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
          {/* <a href="http://localhost:3000/auth/github"><img src={Git} alt="git-icon" /></a> */}
          <div className="regMain">

<div style={{margin: "10px"}}>
  <a href="http://localhost:3000/auth/google"><img src={Google} alt="git-icon" /></a>
</div>
<div style={{margin: "10px"}}>
  <a href="http://localhost:3000/auth/github"><img src={Git} alt="git-icon" /></a>
</div>
</div>
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalAuth;
