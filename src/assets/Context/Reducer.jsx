//TYPES
const LISTAME_POKEMONES = "LISTAME_POKEMONES";
const ELIMINAME_POKEMON = "ELIMINAME_POKEMON";
const GUARDAME_POKEMON = "GUARDAME_POKEMON";

export default function Reducer(state, action) {
  const { payload, type } = action;

  switch (type) {
    case LISTAME_POKEMONES:
      return { ...state, pokemones: payload };

    case GUARDAME_POKEMON:
      const guardamePokemon = [...state.favoritos, payload];
      localStorage.setItem("favoritos", JSON.stringify(guardamePokemon));
      return { ...state, favoritos: [...state.favoritos, payload] };

    case ELIMINAME_POKEMON:
      const eliminamePokemon = state.favoritos.filter(
        (pokemon) => pokemon.name != payload.name
      );
      localStorage.setItem("favoritos", JSON.stringify(eliminamePokemon));
      return {
        ...state,
        favoritos: state.favoritos.filter(
          (pokemon) => pokemon.name != payload.name
        ),
      };
  }
}
