import React, { useState, useEffect, useCallback } from 'react';
import CharacterCard from '../../components/CarCharacter/CharacterCard';
import './Masculino.css'; // Asegúrate de importar el CSS aquí

export default function Masculino() {
  const [personajes, setPersonajes] = useState([]);
  const [nextPage, setNextPage] = useState('https://dragonball-api.com/api/characters');
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  // Función que carga personajes desde la API
  const cargarPersonajes = useCallback(() => {
    if (!nextPage || cargando) return;
    setCargando(true);

    fetch(nextPage)
      .then((res) => {
        if (!res.ok) throw new Error('Error al cargar personajes');
        return res.json();
      })
      .then((data) => {
        const filtrados = data.items.filter(p => p.gender === 'Male');
        setPersonajes(prev => [...prev, ...filtrados]);
        setNextPage(data.links.next); // guardamos el enlace de la siguiente página
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
    <div className="masculino-container">
      <div className="masculino-title">
        Personajes Masculinos
      </div>

      <div className="character-card-container">
        {personajes.map((p) => (
          <CharacterCard key={p.id} personaje={p} />
        ))}
      </div>

      {cargando && <div className="loader">Cargando...</div>}
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}
