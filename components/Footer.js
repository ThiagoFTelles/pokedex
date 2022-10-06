import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <footer className={styles.footer}>
      <p>
        <span>Pokedex</span> &copy; {year}
      </p>
    </footer>
  );
}
