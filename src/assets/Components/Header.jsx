import { Link } from "react-router-dom";
import "../Style/Header.css";

function Header() {
  return (
    <header className="header">
      <nav>
        <Link to={"/"}>Home </Link>
        <Link to={"/pokemones"}>Pokemones </Link>
        <Link to={"/favoritos"}>Favoritos </Link>
      </nav>
    </header>
  );
}

export default Header;
