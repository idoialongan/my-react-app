import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//RENDER App Component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//INMUTABILIDAD
//const root = ReactDOM.createRoot(document.getElementById('root'));
//EJEMPLO 1: El número se está actualizando porque cada segundo estamos ejecutando la función inmutable, 
//con lo que se ejecuta el renderizado con el nuevo valor a cada vez.
// function inmutable() {
//   const element = (
//     <div>
//       <h1>Prueba de inmutabilidad</h1>
//       <h2>Este es un número aleatorio: {Math.random()}.</h2>
//     </div>
//   );
//   root.render(element);
// }
// setInterval(inmutable, 1000);

//EJEMPLO2:Si ejecutamos el renderizado una única vez pero seguimos ejecutando la función veréis 
//como el número se mantiene estático
// var lock = true;

// function inmutable() {
//   const element = (
//     <div>
//       <h1>Prueba de inmutabilidad</h1>
//       <h2>Este es un número aleatorio: {Math.random()}.</h2>
//     </div>
//   );

//   if(lock) {
//     root.render(element);
//     lock = false;
//   }
// }

// setInterval(inmutable, 1000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
