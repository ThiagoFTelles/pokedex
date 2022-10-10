import Image from 'next/image';
import styles from '../styles/About.module.scss';

export default function About() {
  return (
    <div className={`container ${styles.about}`}>
      <span className={styles.title}>
        <Image
          src="/images/pokeball.gif"
          width="50"
          height="50"
          alt="Charizard"
        />
        <h1>About</h1>
        <Image
          src="/images/pokeball.gif"
          width="50"
          height="50"
          alt="Charizard"
        />
      </span>
      <span className={styles.text}>
        <p>
          Go to the homepage, click or tap to catch a pokemon from the list to
          hear and see its information on the Pokedex.
        </p>
        <p>
          Project created using React + Nextjs + Sass + Redux for training
          purposes with these tools. I created a design that is fun and allows
          the use of componentization, navigation between routes and API
          consumption.
        </p>
      </span>
      <span className={styles.image}>
        <Image
          src="/images/charizard.png"
          width="250"
          height="250"
          alt="Charizard"
        />
      </span>
    </div>
  );
}
