import { useReducer } from 'react';
import classes from './MealsSummary.module.css';

const step = 50;
const limitRGB = (num) => (num < 0 ? 0 : num > 255 ? 255 : num);
const reducer = (state, action) => {
  switch(action.type){
    case "INCREMENT_RED":
      return Object.assign({}, state, {red: limitRGB(state.red + step) });
    case "DECREMENT_RED":
      return Object.assign({}, state, {red: limitRGB(state.red - step) });
    case "INCREMENT_GREEN":
      return Object.assign({}, state, {green: limitRGB(state.green + step) });
    case "DECREMENT_GREEN":
      return Object.assign({}, state, {green: limitRGB(state.green - step) });
    case "INCREMENT_BLUE":
      return Object.assign({}, state, {blue: limitRGB(state.blue + step) });
    case "DEREMENT_BLUE":
      return Object.assign({}, state, {blue: limitRGB(state.blue - step) });
    default:
      return state;
  }
}
const MealsSummary = () => {
  const [{red, green, blue}, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
  return (
    <section className={classes.summary}>
      <h2 style={{color: `rgb(${red}, ${green}, ${blue})`}}>Delicious Food, Delivered to you!</h2>
      <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quia facere suscipit recusandae molestias dicta nulla harum, assumenda doloribus. Et iure, ad vel iusto tempore reiciendis fuga totam. Facilis, libero?
      </p>
      <div>
        <div>
          <span>RED</span>
          <button style={{cursor:'pointer'}} onClick={() => dispatch({type: "INCREMENT_RED"})}>+</button>
          <button style={{cursor:'pointer'}} onClick={() => dispatch({type: "DECREMENT_RED"})}>-</button>
        </div>

        <div>
          <span>GREEN</span>
          <button style={{cursor:'pointer'}} onClick={() => dispatch({type: "INCREMENT_GREEN"})}>+</button>
          <button style={{cursor:'pointer'}} onClick={() => dispatch({type: "DECREMENT_GREEN"})}>-</button>
        </div>

        <div>
          <span>BLUE</span>
          <button style={{cursor:'pointer'}} onClick={() => dispatch({type: "INCREMENT_BLUE"})}>+</button>
          <button style={{cursor:'pointer'}} onClick={() => dispatch({type: "DECREMENT_BLUE"})}>-</button>
        </div>
      </div>
    </section>
  );
}

export default MealsSummary;