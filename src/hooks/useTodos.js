import { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer';
const initialState = []; 

const init = () => {
  return JSON.parse(localStorage.getItem('todos') || []);
}

export const useTodos = ( ) => {

  const [todos, dispatch ] = useReducer(todoReducer, initialState, init);

  useEffect(() => {

    localStorage.setItem('todos', JSON.stringify(todos));

  }, [todos])

  const handleNewTodo = (todo) => {
    dispatch({
      type: 'ADD_NEW_TODO',
      payload: todo
    })
  }

  const pendingTodosCount = (todos.filter((todo) => !todo.done )).length;

  const todosCount = todos.length;

   
  const handleToggleTodo = (todo) => {
    dispatch({
      type: 'TOGGLE_TODO',
      payload: todo
    })

  }

  const handleDeleteTodo = (id) => {
    dispatch({
      type: 'DELETE_TODO',
      payload: id
    })
    console.log('Id del Todo a borra : ', id)
  }
  return {
    handleDeleteTodo,
    handleNewTodo, 
    handleToggleTodo,
    todos,
    pendingTodosCount,
    todosCount
  }
}
