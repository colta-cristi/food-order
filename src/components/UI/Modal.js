import { createPortal } from 'react-dom';
import classes from './Modal.module.css';

export const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
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
      {createPortal(<Backdrop />, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement,
      )}
    </div>
  );
};

export default Modal;
