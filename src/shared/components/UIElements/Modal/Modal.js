import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";

const ModalOverlay = (props) => {
  const content = (
    <div className="modal-overlay">
      <header>
        <h2 className="modal-overlay-header">{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault
        }
      >
        <div className="modal-overlay-children">{props.children}</div>
        <footer className="modal-overlay-footer">{props.footer}</footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        /* timeout={200} */
        classNames="modal"
      >
        {/* takes props from Modal and forwards them as attributes to ModalOverlay */}
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
