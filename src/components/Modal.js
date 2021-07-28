import React from "react";
import ReactDOM from "react-dom";
import styles from "../assets/styles/Modal.module.scss";

const portalRoot = document.getElementById("portal-root");

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div
      className={styles.overlay}
      style={{
        opacity: props.isOpen ? "1" : "0",
        visibility: props.isOpen ? "visible" : "hidden",
      }}
    >
      <div className={styles.modalContainer}>
        <button type="button" onClick={() => props.setState(false)}>
          X
        </button>
        {props.children}
      </div>
    </div>,
    portalRoot
  );
};

export default Modal;
