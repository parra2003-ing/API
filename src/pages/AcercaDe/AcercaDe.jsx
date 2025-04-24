import React from 'react';
import './AcercaDe.css';

export default function AcercaDe() {
  return (
    <div className="acerca-container">
      <h1>Acerca de los Desarrolladores</h1>

      {/* Primer desarrollador */}
      <div className="dev-card">
        <img
          src="https://i.pinimg.com/originals/3d/d8/db/3dd8dbdfa1f020fd4316efed1aa1e1f0.gif"
          alt="Goku gif"
          className="dev-img"
        />
        <div className="dev-info">
          <h2>Edward's Stevent Parra Hurtatis</h2>
          <p><strong>Programa:</strong> Ingeniería de Sistemas</p>
          <p><strong>Universidad:</strong> Universidad de la Amazonia</p>
          <p><strong>Semestre:</strong> 8°</p>
          <p>
            <strong>GitHub:</strong>{' '}
            <a href="https://github.com/parra2003-ing" target="_blank" rel="noopener noreferrer">
              github.com/parra2003-ing
            </a>
          </p>
        </div>
      </div>

      {/* Segundo desarrollador */}
      <div className="dev-card">
        <img
          src="https://i.pinimg.com/originals/3c/fa/42/3cfa42dbfd17d1a6d360603f1c7eb8df.gif"
          alt="Vegeta gif"
          className="dev-img"
        />
        <div className="dev-info">
          <h2>Hendersson Iarley Machao Lopera</h2>
          <p><strong>Programa:</strong> Ingeniería de Sistemas</p>
          <p><strong>Universidad:</strong> Universidad de la Amazonia</p>
          <p><strong>Semestre:</strong> 8°</p>
          <p>
            <strong>GitHub:</strong>{' '}
            <a href="https://github.com/usuario-segundo" target="_blank" rel="noopener noreferrer">
            https://github.com/HenderssonMachao
            </a>
          </p>
        </div>
      </div>

      <footer>
        <p>© {new Date().getFullYear()} Proyecto Dragon Ball</p>
      </footer>
    </div>
  );
}
