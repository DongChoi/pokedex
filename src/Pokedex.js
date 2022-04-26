import Pokecard from "./Pokecard";
import "./Pokecard.css";

/** accepts an array of pokemons and returns pokemon card html
 * @param {array} Any pokemon info
 * @return HTML
 */
function Pokedex({ pokemons }) {
  console.log(pokemons);
  return (
    <div className="card-container">
      {pokemons.map((pokemon) => (
        <Pokecard
          id={pokemon.id}
          name={pokemon.name}
          type={pokemon.type}
          base_experience={pokemon.base_experience}
        />
      ))}
    </div>
  );
}

export default Pokedex;
