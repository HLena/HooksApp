import { useForm } from "../hooks/useForm"

export const TodoAdd = ({ onNewTodo }) => {

  const { onInputChange, description, resetInputs } = useForm({
    description: ''
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    if( description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description
    }

    onNewTodo && onNewTodo(newTodo)

    resetInputs();
  }


  return (
    <form onSubmit={ onFormSubmit }>
      {/* TodoAdd onNewTodo(todo) */}
      {/* { id: new Date()...., description: '', done: false} */}
        <input 
          type="text"
          placeholder="¿Qué hay que hacer"
          className="form-control"
          name = "description"
          value={description}
          onChange = { onInputChange }
        />
        <button 
          type="submit"
          className="btn btn-primary mt-1"
        >
          Agregar
        </button>
      </form>
  )
}
