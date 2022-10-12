import Image from 'next/image';
import React from 'react';

export default function Pokemon({ pokemon }) {
  const { id, name } = pokemon;

  return (
    <div className="pokemon">
      <span className="pokemonImage">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`}
          width="90"
          height="90"
          alt={name}
        />
        <h3 className="pokemonName">{`#${id} ${name}`}</h3>
      </span>
    </div>
  );
}
