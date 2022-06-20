import React, { useReducer } from "react";

//here we are going create two  reducer, which are using same state value. but, working independantly
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
    const [count2, dispatch2] = useReducer(reducer, initialState);
  return (
    <div>
      <div>count-{count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>

      <hr />
      <div>count-{count2}</div>
      <button onClick={() => dispatch2("increment")}>Increment</button>
      <button onClick={() => dispatch2("decrement")}>Decrement</button>
      <button onClick={() => dispatch2("reset")}>Reset</button>
    </div>
  );
};

export default CounterReducer;
