import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Card.module.scss';

export default function Card({ pokemon }) {
  const { id, name } = pokemon;

  return (
    <div className={styles.card}>
      <Link href={`/pokemon/${id}`}>
        <span>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`}
            width="90"
            height="90"
            alt={name}
          />
          <h3>{`#${id} ${name}`}</h3>
        </span>
      </Link>
    </div>
  );
}
