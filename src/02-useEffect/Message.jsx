import  { useState } from 'react';

// Nota: importancia de desmontar correctamente un componente 


// En el useEffect se crea una funcion (onMouseMove) que obtiene la posicion de mouse cada vez
// que se mueve y se le asigna dicho valor al estado coords, la forma de optener estas coordenada es gracias 
// al evento (Window.addEventListener). Caundo el componente es desmontado este mismo evento 
// (Window.removeEventListener) es removido, de esta forma evitamos que se siga obteniendo la posicion del
// cursor dsespues que el componente se desmonto y de esa manera evitar que se trate de cambiar el estado.
// Muchas veces cuando se trata de cambiar o acceder a un estado de un componente que ya se desmonto
// ocurre un error. De esta forma tambien podemos evitar afectar directamente nuestra memoria


export const Message = () => {

    const [coords, setCoords] = useState({x: 0, y: 0});

    useEffect(() => {

        const onMouseMove = ({ x, y }) => {
            setCoords({x, y});
        }

        window.addEventListener('mousemove', onMouseMove)
    
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        }

    }, [])
    
    return (
        <>
            <h1> El usuario ya existe </h1>
            { JSON.stringify(coords) }
        </>
    )
}
