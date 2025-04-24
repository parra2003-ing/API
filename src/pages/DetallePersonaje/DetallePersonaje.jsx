import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './DetallePersonaje.css';

export default function DetallePersonaje() {
  const { id } = useParams();
  const [personaje, setPersonaje] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dragonball-api.com/api/characters/${id}`)
      .then(response => {
        if (!response.ok) throw new Error('No se pudo cargar el personaje');
        return response.json();
      })
      .then(data => {
        setPersonaje(data);
        setCargando(false);
      })
      .catch(error => {
        setError(error.message);
        setCargando(false);
      });
  }, [id]);

  if (cargando) return <div className="loader">Cargando...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="detalle-container">
      <div className="detalle-card">
        <img src={personaje.image} alt={personaje.name} className="detalle-img" />

        <div className="detalle-info">
          <h2>{personaje.name}</h2>
          <p><strong>Raza:</strong> {personaje.race || 'Desconocido'}</p>
          <p><strong>Género:</strong> {personaje.gender || 'Desconocido'}</p>
          <p><strong>Afiliación:</strong> {personaje.affiliation || 'Ninguna'}</p>
          <p><strong>Base KI:</strong> {personaje.ki || '0'}</p>
          <p><strong>KI Total:</strong> {personaje.maxKi || '0'}</p>

          {personaje.description && (
            <p><strong>Descripción:</strong> {personaje.description}</p>
          )}

          {personaje.originPlanet && (
            <>
              <p><strong>Planeta de Origen:</strong> {personaje.originPlanet.name}</p>
              <p className="planet-desc">{personaje.originPlanet.description}</p>
              {personaje.originPlanet.image && (
                <img
                  src={personaje.originPlanet.image}
                  alt={personaje.originPlanet.name}
                  className="planet-img"
                />
              )}
            </>
          )}
        </div>
      </div>

      {personaje.transformations?.length > 0 ? (
        <div className="detalle-transformaciones">
          <h3>Transformaciones</h3>
          <div className="transformacion-grid">
            {personaje.transformations.map((trans, index) => (
              <div className="card-trans" key={index}>
                {trans.image && (
                  <img src={trans.image} alt={trans.name} className="card-trans-img" />
                )}
                <div className="card-trans-body">
                  <h4>{trans.name}</h4>
                  <p><strong>KI:</strong> {trans.ki}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="detalle-transformaciones">
          <h3>Este personaje no tiene transformaciones.</h3>
        </div>
      )}
    </div>
  );
}