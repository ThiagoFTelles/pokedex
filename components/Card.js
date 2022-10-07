import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Card({ pokemon }) {
  const { id, name } = pokemon;

  return (
    <div>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`}
        width="70"
        height="70"
        alt={name}
      />
      <p>#{id}</p>
      <h3>{name}</h3>
      <Link href={`/pokemon/${id}`}>
        <a>Details</a>
      </Link>
    </div>
  );
}
