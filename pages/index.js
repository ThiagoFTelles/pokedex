import Card from '../components/Card';
import styles from '../styles/Home.module.css';

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
  return (
    <div className={`container ${styles.home}`}>
      <h1>Pokedex</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <Card key={pokemon.id} pokemon={pokemon} />
          </li>
        ))}
      </ul>
    </div>
  );
}
