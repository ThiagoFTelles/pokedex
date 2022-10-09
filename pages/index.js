import React, { useEffect } from 'react';
import Card from '../components/Card';
import styles from '../styles/Home.module.scss';

export async function getStaticProps() {
  const maxPokemons = 150;
  const api = `https://pokeapi.co/api/v2/pokemon/`;
  const response = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await response.json();
  const { results } = data;

  // add pokemon id
  const pokemons = results.map((pokemon) => ({
    ...pokemon,
    id: pokemon.url.split('/')[6],
  }));

  return {
    props: {
      pokemons,
    },
  };
}

export default function Home({ pokemons }) {
  const slides = React.useRef();
  const [currentSlide, setCurrentSlide] = React.useState(1);
  const [sliderStyle, setSliderStyle] = React.useState({});
  const slideWidth = slides.current?.offsetWidth;
  const scrollWidth = slides.current?.scrollWidth;
  const pokemonsPerPage = 3;
  const totalPages = pokemons.length / pokemonsPerPage;

  useEffect(() => {
    setSliderStyle({
      transform: `translateX(-${
        (scrollWidth / totalPages) * (currentSlide - 1)
      }px)`,
    });
  }, [scrollWidth, currentSlide, totalPages]);

  function handleNext() {
    currentSlide < totalPages && setCurrentSlide(currentSlide + 1);
  }
  function handlePrevious() {
    currentSlide > 1 && setCurrentSlide(currentSlide - 1);
  }

  return (
    <div className={`container ${styles.home}`}>
      <span className={styles.buttons}>
        <button onClick={handlePrevious}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </span>
      <section ref={slides} style={sliderStyle}>
        <ul>
          {pokemons.map((pokemon) => (
            <li key={pokemon.id}>
              <Card key={pokemon.id} pokemon={pokemon} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
