import React from 'react';
import './CharacterCard.css';
import { useNavigate } from 'react-router-dom';

export default function CharacterCard({ personaje }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/personaje/${personaje.id}`);
  };

  return (
    <div className="character-card" onClick={handleClick}>
      <div className="character-image-container">
        <img
          src={personaje.image}
          alt={personaje.name}
          className="character-image"
        />
      </div>
      <div className="character-content">
        <div className="character-name">{personaje.name}</div>
        <div className="character-race">{personaje.race} - {personaje.gender}</div>

        <div className="character-info-block">
          <div className="character-label">Base KI:</div>
          <div className="character-highlight">{personaje.ki}</div>
        </div>

        <div className="character-info-block">
          <div className="character-label">Total KI:</div>
          <div className="character-highlight">{personaje.maxKi}</div>
        </div>

        <div className="character-info-block">
          <div className="character-label">Affiliation:</div>
          <div className="character-highlight">{personaje.affiliation}</div>
        </div>
      </div>
    </div>
  );
}
