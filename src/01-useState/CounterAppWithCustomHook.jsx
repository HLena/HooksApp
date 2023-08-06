import { useCounter } from "../hooks/useCounter"

export const CounterAppWithCustomHook = () => {

    const { 
        counter,
        increment,
        decrement,
        reset
    } = useCounter();

    return (
        <div>
            <h1> Counter: { counter } </h1>
            <hr />
            <button className = "btn btn-primary" onClick = { () => increment(1) }> +1 </button>
            <button className = "btn btn-primary" onClick = { reset }> Reset </button>
            <button className = "btn btn-primary" onClick = { () => decrement(1)}> -1 </button>
        </div>
    )
}
