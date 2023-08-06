import { memo } from "react"

export const Child = memo(({ increment, value}) => {

  console.log('Boton generado numero', value)

  return (
    <button 
      className = "btn btn-primary"
      onClick = { () => increment(value) }
    >
      { value }
    </button>
  )
})
