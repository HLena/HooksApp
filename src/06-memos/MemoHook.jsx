import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";

const heavyStaff = ( iterations = 100) => {
  for (let index = 0; index < iterations; index++) {
    console.log('Ahí vamos ... ')
  }

  return `${ iterations } iteraciones realizadas`;

};

export const MemoHook= () => {

  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  const memorizedValue =  useMemo(() => heavyStaff(), [counter])
  
  return (
    <>
      <h1> Counter: <small>{ counter }</small> </h1>
      <hr />

      <h4>{ memorizedValue }</h4>
      
      <button
        className = "btn btn-primary"
        onClick = {() => increment() }
      > 
        + 1
      </button>
      <button 
        className = "btn btn-outline-primary"
        onClick = { () => setShow(!show) }
      >
        show/hide { JSON.stringify(show)}
      </button>
    </>
  )
}
