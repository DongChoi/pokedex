import "./Pokecard.css";

const BASE_URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;
/** accepts Pokemon information and returns informaion
 * @param {obj} Pokemon
 * @return HTML
 */
function Pokecard({ name, id, type, base_experience }) {
  const image = `${BASE_URL}${id}.png`;
  return (
    <div className="Pokecard">
      <h2 className="Pokecard-name">{name}</h2>
      <img className="Pokecard-image" src={image} alt="failed to load" />
      <p className="Pokecard-type">type: {type}</p>
      <p className="Pokecard-EXP">EXP {base_experience}</p>
    </div>
  );
}

export default Pokecard;
