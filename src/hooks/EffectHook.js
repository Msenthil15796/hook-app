import React, { useEffect, useState } from "react";

// we can mimic
// componentDidMount() lifecycle method -by passing an empty dependancy array
// componentDidUpdate() lifecycle method -by passing a props/state value inside the dependancy array
// componentWillUnMount() lifecycle method -by return a function

const EffectApp = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [display, setdisplay] = useState(true);

  const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    

  const [x1, setX1] = useState(0);
  const [y1, setY1] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
    };
    
    const logMousePosition1 = (e) => {
      console.log("Mouse Event-1");
      setX1(e.clientX);
      setY1(e.clientY);
    };

  //componentDidMount
  useEffect(() => {
    console.log("UseEffect called for componentDidMount");
    window.addEventListener("mousemove", logMousePosition);
  }, []);
    
    

  //componentDidUpdate
  useEffect(() => {
    console.log("useEffect called for componentDidUpdate");
    document.title = `you clicked ${count} times`;
  }, [count]);

    
    
  //componentWillUnMount
  useEffect(() => {
    console.log("UseEffect called for componentWillUnMount");
    window.addEventListener("mousemove", logMousePosition1);

    return () => {
      console.log("componentWillUnMount called");
      window.removeEventListener("mousemove", logMousePosition1);
    };
  }, []);
  return (
    <div>
      <h2>componentDidUpdate</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Clicled {count} times
      </button>

      <hr />
      <div>
        <h2>componentDidMount</h2>
        Hooks X-{x} Y-{y}
      </div>

      <hr />
      <div>
        <h2>componentWillUnMount</h2>
        <button onClick={() => setdisplay(!display)}>Toggle display</button>
        {display && (
          <div>
            Hooks X-{x1} Y-{y1}
          </div>
        )}
      </div>
    </div>
  );
};

export default EffectApp;
