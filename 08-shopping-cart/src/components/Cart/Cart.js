import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import Modal from '../UI/Modal';

const Cart =(props) => {
  const cartCtx = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {
    return cartCtx.removeItem(id)
  };
  const cartItemAddHandler = (item) => { cartCtx.addItem({...item, amount: 1})};

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map(item => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
          />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
    </Modal>
  );
}

export default Cart;