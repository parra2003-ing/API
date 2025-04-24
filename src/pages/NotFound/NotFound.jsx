import React from 'react';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="notfound-container">
      <img
        src="https://media.tenor.com/yo9RJ8Pb8tMAAAAM/dragon-ball-z-sad.gif"
        alt="Goku triste"
        className="notfound-img"
      />
      <h1>¡Oops! Página no encontrada (404)</h1>
      <p>La ruta que estás buscando no existe o fue eliminada.</p>
      <a href="/" className="notfound-btn">Volver al inicio</a>
    </div>
  );
}
