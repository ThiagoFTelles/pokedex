import styles from '../../styles/Pokemon.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';

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

  return {
    props: { pokemon: data },
  };
};

const Pokemon = ({ pokemon }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div className="loading"></div>;
  }

  const { name, id, types } = pokemon;
  return (
    <div className={`container ${styles.details}`}>
      <h1 className={styles.title}>{name}</h1>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`}
        width="100"
        height="100"
        alt={name}
      />
      <div>
        <h3>#:{id}</h3>
      </div>
      <div>
        <h3>Type:</h3>
        <div className={styles.typesContainer}>
          {types.map(({ type }, index) => (
            <p className={`${styles.type} ${styles[type.name]}`} key={index}>
              {type.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Pokemon;
