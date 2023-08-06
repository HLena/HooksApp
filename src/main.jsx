import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  BrowserRouter,
  RouterProvider
} from 'react-router-dom'

import './index.css'
// import { TodoApp } from './08-useReducer/TodoApp'
import { MainApp } from './09-useContext/MainApp'
// import { Layout } from './06-useLayoutEffect/Layout'
// import { MemoHook } from './07-memos/MemoHook'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { Father } from './07-tarea-memo/Father'
// import { HooksApp } from './hooksApp'
// import { CounterApp } from './useState/CounterApp'
// import { CounterAppWithCustomHook } from './useState/CounterAppWithCustomHook'
// import { SimpleForm } from './useEffect/SimpleForm'
// import { SimpleFormWithCustomHook } from './useEffect/SimpleFormWithCustomHook'
// import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import './08-useReducer/intro-reducer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <MainApp/>
    {/* </React.StrictMode>, */}
  </BrowserRouter>
)

