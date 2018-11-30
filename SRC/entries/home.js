import React from 'react';
import {render} from 'react-dom';
import HomeContainer from '../pages/containers/homeContainer.js';
import Ejemplo from './routerPreset.js';
console.log('!Esta es la pagina de Prestamos!')

const app = document.getElementById('app');

// ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>hola Estudiante!</h1>;
render(<Ejemplo/>,app);
