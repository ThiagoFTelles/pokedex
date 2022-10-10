import styles from '../../styles/Pokemon.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect } from 'react';

export const getStaticPaths = async () => {
  const maxPokemons = 150;
  const api = `https://pokeapi.co/api/v2/pokemon/`;
  const response = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await response.json();
  const { results } = data;

  // add pokemon id and return params
  const paths = results.map((pokemon) => ({
    params: { pokemonId: pokemon.url.split('/')[6] },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const id = params.pokemonId;
  const api = `https://pokeapi.co/api/v2/pokemon/`;
  const response = await fetch(`${api}/${id}`);
  const data = await response.json();

  async function getDescription(pokemon) {
    const result = await fetch(pokemon.species.url);
    const data = await result.json();
    const pokemonDescription = data.flavor_text_entries
      .filter((e) => e.language.name === 'en')
      .map((e) => e.flavor_text);
    return pokemonDescription[0].split('.')[0];
  }

  const description = await getDescription(data);
  const pokemon = { ...data, description };

  return {
    props: { pokemon },
  };
};

const Pokemon = ({ pokemon }) => {
  const router = useRouter();
  // const { name, id, types, description } = pokemon;
  const displayDescription = pokemon?.description.replace(/\n/g, ' ');

  useEffect(() => {
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance();
    msg.lang = 'en-US';
    msg.text = pokemon?.name + '. ' + displayDescription;
    window.speechSynthesis.speak(msg);
  }, [pokemon?.name, displayDescription]);

  if (router.isFallback) {
    return <div className="loading"></div>;
  }

  return (
    <div className={`container ${styles.details}`}>
      <span>
        <span className={styles.image}>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon?.id}.gif`}
            width="100"
            height="100"
            alt={pokemon?.name}
          />
        </span>
        <h1
          className={`title ${styles.title}`}
        >{`#${pokemon?.id} ${pokemon?.name}`}</h1>
        <h1 className={styles.description}>{`${pokemon?.description}.`}</h1>
        <div className={styles.typesContainer}>
          {pokemon?.types.map(({ type }, index) => (
            <p className={`${styles.type} ${styles[type.name]}`} key={index}>
              {type.name}
            </p>
          ))}
        </div>
        <div className={styles.buttons}>
          <Link href={`${pokemon?.id - 1}`}>
            <button
              disabled={Number(pokemon?.id) === 1}
              className={`${styles.button} prev`}
            >
              &lt; Prev
            </button>
          </Link>
          <Link href={`${pokemon?.id + 1}`}>
            <button
              disabled={Number(pokemon?.id) >= 150}
              className={`${styles.button} next`}
            >
              Next &gt;
            </button>
          </Link>
        </div>
        <Image
          src="/images/pokedex.png"
          width="360"
          height="532"
          alt="pokedex"
          className={styles.pokedex}
        />
      </span>
    </div>
  );
};
export default Pokemon;
