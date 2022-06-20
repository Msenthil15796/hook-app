import React from 'react'
import ComponentB from './ComponentB'



//context
// to avoid props drilling i.e; we do not want to pass the data to every level of component tree
//here we going to pass Props from ComponentA to ComponentC


const ComponentA = () => {
  return (
      <div>
          <ComponentB />
      </div>
  )
}

export default ComponentA