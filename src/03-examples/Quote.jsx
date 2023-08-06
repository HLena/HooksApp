import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({ name, species, status }) => {

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({width: 0, height: 0});

    useLayoutEffect(() => {

      const { width, height } = pRef.current.getBoundingClientRect();
      setBoxSize({width, height});

    }, [name])


    return (
        <>
            <blockquote 
                className="blockquote text-end"
                style = {{display: 'flex'}}
            >
                <p className="mb-1" ref = {pRef}>  { name } </p>
                <footer className="blockquote-footer"> { species } {status}</footer>
            </blockquote>
            <code> { JSON.stringify(boxSize) } </code>
        </>
    )
}
