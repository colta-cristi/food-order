import cartContext from '../../../store/cart-context';
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import { useContext } from 'react';

const MealItem = props => {
  const cartCtx = useContext(cartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = quantity => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      quantity: quantity,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
