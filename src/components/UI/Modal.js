import { createPortal } from 'react-dom';
import classes from './Modal.module.css';

export const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

export const ModalOverlay = props => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = props => {
  return (
    <div>
      {createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement,
      )}
    </div>
  );
};

export default Modal;
