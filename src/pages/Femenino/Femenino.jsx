import React, { useState, useEffect, useCallback } from 'react';
import CharacterCard from '../../components/CarCharacter/CharacterCard';
import './Femenino.css'; // Asegúrate de importar el CSS aquí

export default function Femenino() {
  const [personajes, setPersonajes] = useState([]);
  const [nextPage, setNextPage] = useState('https://dragonball-api.com/api/characters');
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  const cargarPersonajes = useCallback(() => {
    if (!nextPage || cargando) return;
    setCargando(true);

    fetch(nextPage)
      .then((res) => {
        if (!res.ok) throw new Error('Error al cargar personajes');
        return res.json();
      })
      .then((data) => {
        const filtrados = data.items.filter(p => p.gender === 'Female');
        setPersonajes(prev => {
          const idsPrevios = new Set(prev.map(p => p.id));
          const nuevos = filtrados.filter(p => !idsPrevios.has(p.id));
          return [...prev, ...nuevos];
        });

        if (data.links?.next) {
          setNextPage(data.links.next);
        } else {
          setNextPage(null); // ya no hay más páginas
        }

        if (filtrados.length < 3 && data.links?.next) {
          setTimeout(() => {
            cargarPersonajes();
          }, 500);
        }

        setCargando(false);
      })
      .catch(err => {
        setError(err.message);
        setCargando(false);
      });
  }, [nextPage, cargando]);

  useEffect(() => {
    cargarPersonajes();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      if (bottom && !cargando) {
        cargarPersonajes();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [cargarPersonajes, cargando]);

  return (
    <div className="femenino-container">
      <div className="femenino-title">
        Personajes Femeninos
      </div>

      <div className="character-card-container">
        {personajes.map((p) => (
          <CharacterCard key={p.id} personaje={p} />
        ))}
      </div>

      {cargando && <div className="loading-message">Cargando...</div>}
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}