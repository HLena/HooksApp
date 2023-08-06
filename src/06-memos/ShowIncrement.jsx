import { memo } from "react";



// Memo captura una imagen del componente para qeu este no se vuelva a generar sin ningun parámetro cambia

export const ShowIncrement = memo(({increment}) => {

  console.log(' me volvi a generar')

  return (
    <button
      className = "btn btn-primary"
      onClick = { () => increment(5) }
    >
      Incrementar
    </button>
  )
})
