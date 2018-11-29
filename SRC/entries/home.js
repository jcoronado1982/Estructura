import React from 'react';
import {render} from 'react-dom';
import HomeContainer from '../pages/containers/homeContainer.js';
console.log('Hola mundo!')

const app = document.getElementById('app');

// ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>hola Estudiante!</h1>;
render(<HomeContainer/>,app);
