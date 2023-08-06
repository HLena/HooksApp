import { useForm } from '../hooks/useForm'

export const SimpleFormWithCustomHook = () => {

    const {username, email, password, onInputChange, resetInputs} = useForm({
        username:'',
        email: '',
        password: ''
    });
 
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

            <input
                className="form-control mb-3"
                type = "password" 
                name = "password" 
                value = { password }
                onChange = { onInputChange }
            />
            <button className = "btn btn-primary" onClick={ resetInputs }>Limpar</button>
        </div>
    )
}
