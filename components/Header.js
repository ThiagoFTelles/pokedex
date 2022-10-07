import Link from 'next/link';
import styles from '../styles/Header.module.css';
import Image from 'next/image';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} href="/" aria-label="Pokedex - Home">
          <span>
            <Image
              src="/images/pokeball.png"
              width="30"
              height="30"
              alt="Pokedex"
              className={styles.logoImage}
            />
          </span>
        </Link>
        <h1>Pokedex</h1>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
