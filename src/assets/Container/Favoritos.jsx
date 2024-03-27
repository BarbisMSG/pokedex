import { useContext } from "react";
import Contexto from "../Context/Contexto";
import Favorito from "../Container/Favorito";
import "../Style/Layout.css";

function Favoritos() {
  const { favoritos } = useContext(Contexto);

  console.log(favoritos);

  return (
    <>
      <div className="favoritos">
        <h3>Favoritos</h3>
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
