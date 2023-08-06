import { useCounter, useFetch } from "../hooks";
import { Quote, LoadingQuote } from "./";


export const MultipleCustomHook = () => {


    const { increment, counter} = useCounter(1);

    const  {data, isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);

    const { name, species, status } = !!data && data;

    return (
        <div>
            <h1>Breacking Bad</h1>
            <hr />

            {
                isLoading
                    ? <LoadingQuote/>
                    : <Quote 
                        name = { name }
                        species = { species }
                        status = { status }
                    />
            }

            <button 
                className="btn btn-primary" 
                onClick = {() => increment ()}
                disabled = { isLoading }
            >
                Next quote
            </button>

        </div>
    )
}
