import "../Style/Layout.css";
import Contexto from "../Context/Contexto";
import { useContext } from "react";

function Favorito(props) {
  const { name, img } = props;

  const { eliminamePokemon } = useContext(Contexto);

  const handleEliminar = () => {
    eliminamePokemon({ name: name });
  };

  return (
    <>
      <li className="listadofavorito">
        <p>{name}</p>
        <img className="img-pokemon" src={img} alt="" />
        <button onClick={handleEliminar} className="eliminar">
          🗑
        </button>
      </li>
    </>
  );
}

export default Favorito;
