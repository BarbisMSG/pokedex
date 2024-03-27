import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import Contexto from "../Context/Contexto";
import "../Style/Layout.css";

function Pokemon() {
  const location = useLocation();
  const pedazos = location.pathname.split("/");
  const url = "https://pokeapi.co/api/v2/pokemon/" + pedazos[2] + "/";

  console.log("pedazo ---->", pedazos);

  const { guardamePokemon } = useContext(Contexto);
  const [pokemon, setPokemon] = useState();
  const traemePokemon = async () => {
    const res = await axios.get(url);
    setPokemon(res.data);
    console.log("desde Pokemon ---->", res.data);
  };
  useEffect(() => {
    traemePokemon();
  }, []);

  const handleGuardar = () => {
    guardamePokemon({
      name: pokemon.name,
      url: url,
      img: pokemon.sprites.other["official-artwork"].front_default,
    });
    alert("Felicitaciones! Agregaste a " + pokemon.name + " a tus Favoritos");
  };

  const volverAPokemon = () => {
    window.history.back();
  };

  return (
    <>
      <div className="altura">
        <h3>{pokemon?.name}</h3>
        <img
          src={pokemon?.sprites.other["official-artwork"].front_default}
          alt=""
        />
        <button onClick={handleGuardar}>⭐</button>
        <button onClick={volverAPokemon}>⬅</button>
      </div>
    </>
  );
}

export default Pokemon;
