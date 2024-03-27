import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Components/Layout";
import Home from "../Container/Home";
import Pokemones from "../Container/Pokemones";
import Pokemon from "../Container/Pokemon";
import Favoritos from "../Container/Favoritos";
import UsarContexto from "../Context/UsarContexto";

function App() {
  return (
    <BrowserRouter>
      <UsarContexto>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/pokemones" element={<Pokemones />}></Route>
            <Route path="/pokemones/*" element={<Pokemon />}></Route>
            <Route path="/favoritos" element={<Favoritos />}></Route>
          </Routes>
        </Layout>
      </UsarContexto>
    </BrowserRouter>
  );
}

export default App;
