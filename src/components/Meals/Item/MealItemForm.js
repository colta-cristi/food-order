import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = props => {
  const [quantityIsValid, setQuantityIsValid] = useState(true);
  const quantityInputRef = useRef();

  const submitHandler = event => {
    event.preventDefault();
    const quantity = quantityInputRef.current.value;

    if (quantity.trim().length === 0 || quantity < 1 || quantity > 5) {
      setQuantityIsValid(false);
      return;
    }

    props.onAddToCart(+quantity);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={quantityInputRef}
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>+ Add</button>
      {!quantityIsValid && <p>Quantity should be between 1 and 5</p>}
    </form>
  );
};

export default MealItemForm;
