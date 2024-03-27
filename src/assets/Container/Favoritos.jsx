import { useContext, useState } from "react";
import Contexto from "../Context/Contexto";
import Favorito from "../Container/Favorito";
import "../Style/Layout.css";

function Favoritos() {
  const { favoritos } = useContext(Contexto);
  console.log(favoritos);

  return (
    <>
      <div className="favoritos">
        <h2>Favoritos</h2>
        <ul className="listadofav">
          {favoritos.map((favorito, i) => (
            <Favorito {...favorito} key={i}></Favorito>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Favoritos;
