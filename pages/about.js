import Image from 'next/image';
import styles from '../styles/About.module.scss';
import { useState, useRef } from 'react';

export default function About() {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  const toggleAudio = () =>
    isPlaying ? audioRef.current.pause() : audioRef.current.play();

  return (
    <div className={`container ${styles.about}`}>
      <span className={styles.title}>
        <audio
          ref={audioRef}
          src="/songs/song.mp3"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        <Image
          src="/images/pokeball.gif"
          width="50"
          height="50"
          alt="Charizard"
          onClick={toggleAudio}
        />
        <h1>About</h1>
        <Image
          src="/images/pokeball.gif"
          width="50"
          height="50"
          alt="Charizard"
        />
      </span>
      {isPlaying && <h2 className="animeLeft"> Turn on the sound!</h2>}
      <span className={styles.text}>
        <p>
          {
            "Go to the homepage, click or tap to catch a pokemon from the list to hear and see it's information on the Pokedex."
          }
        </p>
        <p>
          {
            'Project created using React + Nextjs + Sass + Redux for training purposes with these tools. I created a design that is fun and allows the use of componentization, navigation between routes and API consumption.'
          }
        </p>
        <p>
          {
            "If you've made it this far, find an easter egg in one of the Pokeballs and enjoy the nostalgia!"
          }
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
