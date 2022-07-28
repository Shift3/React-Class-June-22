import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assests/meals.jpeg';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Delicious Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>

      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Delicious table full of food"/>
      </div>
    </>
  );
}

export default Header;