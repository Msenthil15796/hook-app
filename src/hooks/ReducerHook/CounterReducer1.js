import React, { useReducer } from "react";

//useReducer hook accepts two parameters which are
//*Current State, *action
//depending on the values of the "current State" and the "action", the reducer function wiil return "new State"

//defining the values for useReducer hook
const initialState = 0;
//reducer function
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterReducer = () => {
    //useReducer returns a pair of values (count-state value, dispatch-function)
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>count-{count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

export default CounterReducer;
