import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = props => {
  const items = [{ id: 1, name: 'Sushi', amount: 2, price: 22.99 }];
  const cartItems = (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>34.56</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Add</button>
      </div>
    </Modal>
  );
};

export default Cart;
