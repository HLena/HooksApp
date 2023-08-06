import { useCallback, useState } from "react";
import { Child } from "./Child";

export const Father = () => {

  const buttons = [1, 2, 5, 10, 15];
  const [counter, setCounter] = useState(1);

  const incrementFather = useCallback(
    (value ) => {
      setCounter((c) => c + value)
    },
    [],
  )
  
  return (
    <>
      <h1>Padre</h1>
      <p>Total: {counter}</p>
      <hr />
      {
        buttons.map( (value) => 
          <Child 
            key = { value } 
            value = {value} 
            increment = {incrementFather}
          />
        )
      }
    </>
  )
}
