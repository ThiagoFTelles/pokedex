export async function getStaticProps() {
  const maxPokemons = 150;
  const api = `https://pokeapi.co/api/v2/pokemon/`;
  const response = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await response.json();
  const { results } = data;

  // add pokemon id
  const pokemons = results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
  }));

  return {
    props: {
      pokemons,
    },
  };
}

export default function Home({ pokemons }) {
  return (
    <div className="container">
      <h1>Pokedex</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            {pokemon.id} - {pokemon.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
