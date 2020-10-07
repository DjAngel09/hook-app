import React from 'react';
import ReactDOM from 'react-dom';
//import { CounterApp } from './componets/01-useState/CounterApp';
//import { CounterWithCustomHook } from './componets/01-useState/CounterWithCustomHook';
import { SimpleForm } from './componets/02-useEffect/SimpleForm';
//import { HooksApp } from './HooksApp';

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <SimpleForm />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
