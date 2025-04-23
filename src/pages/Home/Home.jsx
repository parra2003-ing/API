import React, { useState, useEffect, useCallback } from 'react';
import CharacterCard from '../../components/CarCharacter/CharacterCard';
import './Home.css'; // Asegúrate de tener este archivo

export default function Home() {
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
        setPersonajes(prev => [...prev, ...data.items]);
        setNextPage(data.links.next);
        setCargando(false);
      })
      .catch((err) => {
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
    <div className="home-container">
      <div className="logo-box">
        <img
          src="https://web.dragonball-api.com/images-compress/logo_dragonballapi.webp"
          alt="Dragon Ball API"
        />
        <h2>The Dragon Ball API</h2>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="character-card-container">
        {personajes.map((personaje) => (
          <CharacterCard key={personaje.id} personaje={personaje} />
        ))}
      </div>

      {cargando && <div className="loading-message">Cargando...</div>}
    </div>
  );
}
