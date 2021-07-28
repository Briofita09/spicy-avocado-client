import React from "react";
import ReactDOM from "react-dom";
import styles from "../assets/styles/Modal.module.scss";

const portalRoot = document.getElementById("portal-root");

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        <button type="button">X</button>
        {children}
      </div>
    </div>,
    portalRoot
  );
};

export default Modal;
