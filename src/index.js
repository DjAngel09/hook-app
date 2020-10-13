import React from 'react';
import ReactDOM from 'react-dom';
//import { CallbackHook } from './componets/06-memos/CallbackHook';
//import { Padre } from './componets/07-tarea-memo/Padre';
import { TodoApp } from './componets/08-useReducer/TodoApp';
//import { MemoHook } from './componets/06-memos/MemoHook';
//import { FocusScreen } from './componets/04-useRef/FocusScreen';
//import { RealExampleRef } from './componets/04-useRef/RealExampleRef';
//import { Layaut } from './componets/05-useLayautEffect/Layaut';
//import { Memorize } from './componets/06-memos/Memorize';
//import { FormWithCustomHook } from './componets/02-useEffect/FormWithCustomHook';
//import { MultipleCustomHooks } from './componets/examples/MultipleCustomHooks';
//import { CounterApp } from './componets/01-useState/CounterApp';
//import { CounterWithCustomHook } from './componets/01-useState/CounterWithCustomHook';
//import { SimpleForm } from './componets/02-useEffect/SimpleForm';
//import { HooksApp } from './HooksApp';

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <TodoApp />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
