const initialState = {
  id: 1,
  todo: ' Al por hacer',
  done: false
};


const todoReducer = (state = initialState, action = {} ) => {

  switch (state.type) {
    case 'ADD_TODO':
      return [...state, action.payload]
    default: 
      //nothing
  }

  return state;
};


let todos = todoReducer();


// Para realizar una modificacion a nuestro reducer se debe mandar una accion


const newTodo = {
  id: 2,
  todo: 'nueva tarea por hacer',
  done: false
};

const addTodoAction = {
  type: 'ADD_TODO',
  payload: newTodo
}

todos = todoReducer(todos, addTodoAction);

console.log({state: todos})