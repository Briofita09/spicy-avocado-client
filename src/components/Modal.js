import React from "react";
import ReactDOM from "react-dom";
import styles from "../assets/styles/Modal.module.scss";
import { ModalOverlay } from "../assets/styles/modalStyled";

import closeIcon from "../assets/images/other-icons/back.png";

const portalRoot = document.getElementById("portal-root");

const Modal = (props) => {
  return ReactDOM.createPortal(
    <ModalOverlay isOpen={props.isOpen}>
      <div className={styles.modalContainer}>
        <button
          type="button"
          onClick={() => props.setState(false)}
          className={styles.closeButton}
        >
          <img src={closeIcon} alt="Back Icon" />
        </button>
        {props.children}
      </div>
    </ModalOverlay>,
    portalRoot
  );
};

export default Modal;
