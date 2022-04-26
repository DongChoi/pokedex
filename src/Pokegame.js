import _ from "lodash";
import Pokedex from "./Pokedex";

/** accepts an array of pokemons and returns pokemon card html
 * @param {array} Any pokemon info
 * @return HTML
 */
function Pokegame({ pokemons }) {

    let player1 = _.sampleSize(pokemons, 4);
    let player2 = _.sampleSize(pokemons, 4);

    let exp1 = player1.reduce(function (acc, pokemon){
        return acc + pokemon.base_experience;
    }, 0);
    let exp2 = player2.reduce(function (acc, pokemon){
        return acc + pokemon.base_experience;
    }, 0);


  console.log(player1);
  return (
    <div className="game-container">
      <Pokedex pokemons={player1} exp={exp1} isWinner={exp1>exp2}/>
      <hr></hr>
      <Pokedex pokemons={player2} exp={exp2} isWinner={exp2>exp1}/>
    </div>
  );
}

export default Pokegame;
