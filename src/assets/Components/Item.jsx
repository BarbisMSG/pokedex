import { Link } from "react-router-dom";

function Item(props) {
  const { name, url, img } = props;

  let urlCortada = url.split("/");

  return (
    <>
      <li className="li-pokemones">
        <Link to={"/pokemones/" + urlCortada[6]}>{name}</Link>
      </li>
    </>
  );
}

export default Item;
