import { useEffect, useState } from 'react'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'elena',
        email: 'elena@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({target}) => {

        const { name, value } = target;

        setFormState({
            ...formState,
            [ name ] : value
        })
    }

    const resetInputs = () => {
        setFormState({
            username: '',
            email: ''
        });
    }

    useEffect(() => {
        console.log('useEffect')
     
    }, []);
    


    return (
        <div>
            <h1>Formulario Simple</h1>
            <hr />
            <input 
                className="form-control mb-3"
                type = "text" 
                name = "username" 
                value={ username }
                onChange={ onInputChange }
            />
            <input
                className="form-control mb-3"
                type = "email" 
                name = "email" 
                value = { email }
                onChange = { onInputChange }
            />
            <button className = "btn btn-primary" onClick={ resetInputs }>Limpar</button>
        </div>
    )
}
