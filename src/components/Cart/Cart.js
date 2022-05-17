import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = () => {
  const items = [{ id: 1, name: 'Sushi', amount: 2, price: 22.99 }];
  const cartItems = (
    <ul>
      {items.map(item => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>34.56</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Add</button>
      </div>
    </Modal>
  );
};

export default Cart;
