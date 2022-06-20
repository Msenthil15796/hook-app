import React, { useState } from "react";

const StateApp = () => {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState("");

  const [name, setName] = useState({ firstName: "", lastName: "" });

  const [items, setItems] = useState([]);

  const increment = () => {
    setCounter((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCounter((prevCount) => prevCount - 1);
  };

    
    // object
  const incrementFive = () => {
    setCounter((prevCount) => prevCount + 5);
  };
  const onChange = (event) => {
    setValue(event.target.value);
  };

    
    //array
    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value:Math.floor(Math.random() *10)+1
    }])
}

  return (
    <div>
      <button onClick={decrement}>-</button>
      <div>{counter}</div>
      <button onClick={increment}>+</button>
      <button onClick={incrementFive}>+5</button>
      <button onClick={() => setCounter(0)}>Reset</button>
      <hr />
      <input type="text" onChange={onChange} />
      <div>{value}</div>
      <hr />
      {/** useState with objects  

      spread operator is important when we working with objects
    **/}
      <form>
        <h2>useState with objects</h2>
        <label>firstName</label>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <label>lastName</label>
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />

        <h2>firstName:{name.firstName}</h2>
        <h2>lastName:{name.lastName}</h2>
      </form>
      {/** useState with array
      spread operator is important when we working with Arrays
     */}
      <hr />
      <div>
        <h2>useState with Array</h2>
        <button onClick={addItem}>Add a number</button>
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StateApp;
