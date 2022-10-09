import Image from 'next/image';
import styles from '../styles/About.module.scss';

export default function About() {
  return (
    <div className={`container ${styles.about}`}>
      <h1>About</h1>
      <p>
        Project created using React + Nextjs + Sass + Redux for training
        purposes with these tools. I created a design that is fun and allows the
        use of componentization, navigation between routes and API consumption.
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Charizard"
      />
    </div>
  );
}
