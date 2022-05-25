import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import cartContext from '../../store/cart-context';
import { useContext, useEffect, useState } from 'react';

const HeaderCartButton = props => {
  const cartCtx = useContext(cartContext);
  const [isHighlighted, setIsHighlighted] = useState(false);

  const numberOfItems = cartCtx.items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  const btnClasses = `${classes.button} ${isHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if (numberOfItems === 0) return;

    setIsHighlighted(true);

    const timer = setTimeout(() => {
      setIsHighlighted(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [numberOfItems]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
