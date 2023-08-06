import { memo } from "react";


export const Small = memo(({ value }) => {
  
  console.log(' me genere de nuevo');

  return (
    <small>{ value }</small>
  )
})
