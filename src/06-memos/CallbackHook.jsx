import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {


  const [counter, setCounter] = useState(10);

  // useCallback al igual que memo toma una captura pero de una función en lugar de al componente 

  // const incrementFather = useCallback(
  //   () => {
  //     setCounter( (value) => value + 1);
  //   },
  //   [],
  // )

  
  const incrementFather = useCallback(
    (value) => {
      setCounter( (c) => c + value);
    },
    [],
  )
  

  // const incrementFather = () => {
  //   setCounter( counter + 1);
  // }


  return (
    <>
      <h1>useCallback Hook: { counter }</h1>
      <hr /> 
      <ShowIncrement increment = {incrementFather} />
    </>
  )
}
