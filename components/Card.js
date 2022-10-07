import Image from 'next/image';
import React from 'react';

export default function Card({ pokemon }) {
  const { id, name } = pokemon;

  return (
    <div>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`}
        width="120"
        height="120"
        alt={name}
      />
      <h3>
        {id} - {name}
      </h3>
    </div>
  );
}
