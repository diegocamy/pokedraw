import React from 'react';
import './PokeCard.css';

const PokeCard = ({ pokemon }) => {
  if (!pokemon) return <h2>cargando...</h2>;

  return (
    <div className='PokeCard'>
      <h4>{pokemon.nombre}</h4>
      <img src={pokemon.foto} alt='pokemon' />
      <h4>{pokemon.nombre}</h4>
    </div>
  );
};

export default PokeCard;
