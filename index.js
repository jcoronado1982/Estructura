import React from 'react';
import {render} from 'react-dom';
import HomeLayout from './components/home-layout.js';
console.log('Hola mundo!')

const app = document.getElementById('app');

// ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>hola Estudiante!</h1>;
render(<HomeLayout/>,app);
