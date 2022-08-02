import { useContext, useState, useEffect } from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const {items} = cartCtx;

  const numberOfCartItems = items.reduce((currNum, item)=> {
    return currNum + item.amount;
  }, 0);

  useEffect(() => {
    if(items.length === 0){
      return;
    }

    setBtnIsHighlighted(true);
    const timerId = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timerId);
    }
  }, [items]);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
  return(
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;