import { useContext } from 'react';
import cartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import CartItem from './CartItem';

import classes from './Cart.module.css';

const Cart = props => {
  const cartCtx = useContext(cartContext);

  const addHandler = item => {
    cartCtx.addItem({ ...item, quantity: 1 });
  };

  const removeHandler = id => {
    cartCtx.removeItem(id);
  };

  const items = cartCtx.items;
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const cartItems = (
    <ul className={classes['cart-items']}>
      {items.map(item => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          onAdd={addHandler.bind(null, item)}
          onRemove={removeHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {items.length > 0 && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
