import React, { useState, useCallback } from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

//check with console in the browser
//useCallBack hook used for performance optimization
//why do we need useCallback hook ?
// when passing callbacks to "optimized child components" that rely on reference equality to prevent unnecessary renders.

const ParentComponent = () => {
    const [age, setAge] = useState(50)
    const [salary, setSalary] = useState(50000)

   const incrementAge= useCallback(
      () => {
        setAge(age+1)
      },
      [age],
    )
    
    const incrementSalary = useCallback(() => {
      setSalary(salary + 1000);
    }, [salary]);
    
  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default ParentComponent