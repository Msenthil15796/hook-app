import React, { useMemo, useState } from "react";

const MemoCounterOne = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incCounter1 = () => {
    setCount1(count1 + 1);
  };
  const incCounter2 = () => {
    setCount2(count2 + 1);
  };

  const isEven = useMemo(() => {
    //here we are slow down the execution by using "while" loop
    let i = 0;
    while (i < 2000000000) i++;
    return count1 % 2 === 0;
  }, [count1]);
    
    //in the browser, you can able to see the diffence of updating speed of the count1 value and count2 value
    //isEven function only return the counter1 value 
    //counter2 does not affect by the slowness
  return (
    <div>
      <div>
        <button onClick={incCounter1}>Counter1 value-{count1}</button>
        <span>{isEven ? "Even number" : "Odd Nummber"}</span>
      </div>
      <div>
        <button onClick={incCounter2}>Counter2 value-{count2}</button>
      </div>
    </div>
  );
};

export default MemoCounterOne;
