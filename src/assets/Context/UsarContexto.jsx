import Contexto from "./Contexto";
import Reducer from "./Reducer";
import axios from "axios";
import { useReducer } from "react";

function UsarContexto(props) {
  const { children } = props;
  const estadoInicial = {
    pokemones: [],
    favoritos: JSON.parse(localStorage.getItem("favoritos")) || [],
  };

  const [state, dispatch] = useReducer(Reducer, estadoInicial);

  const traemePokemones = async () => {
    console.log("traemePokemones");
    const res = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=44&offset=0"
    );
    console.log("---> res desde Contexto: ", res.data.results);
    dispatch({
      type: "LISTAME_POKEMONES",
      payload: res.data.results,
    });
  };

  const guardamePokemon = (pokemon) => {
    console.log("----> guardamePokemon en Contexto");
    dispatch({ type: "GUARDAME_POKEMON", payload: pokemon });
    console.log("Contexto favoritos:", state.favoritos);
  };

  const eliminamePokemon = (name) => {
    dispatch({ type: "ELIMINAME_POKEMON", payload: name });
    console.log("Eliminado", name);
  };

  return (
    <Contexto.Provider
      value={{
        traemePokemones,
        pokemones: state.pokemones,
        favoritos: state.favoritos,
        guardamePokemon,
        eliminamePokemon,
      }}
    >
      {children}
    </Contexto.Provider>
  );
}

export default UsarContexto;
