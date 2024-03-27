import { useEffect, useState, useContext } from "react";
import Contexto from "../Context/Contexto";
import Item from "../Components/Item";
import "../Style/Layout.css";

function Pokemones() {
  const { pokemones, traemePokemones } = useContext(Contexto);

  useEffect(() => {
    traemePokemones();
    console.log("desde useEffect Pokemones:", pokemones);
  }, []);

  return (
    <>
      <div className="altura">
        <h2>Pokemones</h2>
        <ul className="listadopokemones">
          {pokemones.map((pokemon) => (
            <Item {...pokemon} key={pokemon.name}></Item>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Pokemones;
