import React, { useEffect, useState } from "react";
import axios from "axios";
//HOOKS
import useInterval from "./hooks/useIntervalHook";
import useWindowSize from "./hooks/useWindowSizeHook";
//COMPONENTS
import Lienzo from "./Components/Lienzo/Lienzo";
import NavBar from "./Components/Navbar/NavBar";
import PokeCard from "./Components/PokeCard/PokeCard";
//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [tiempo, setTiempo] = useState(null);
  const [desactivarCanvas, setDesactivarCanvas] = useState(false);
  const [width, height] = useWindowSize();

  const getPokemon = async () => {
    const { data } =
      await axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.ceil(
        Math.random() * 386
      )}
    `);

    const fetchedPokemon = {
      nombre: data.name,
      foto: data.sprites.other["official-artwork"].front_default,
    };

    setPokemon(fetchedPokemon);
    setTiempo(30);
    setDesactivarCanvas(false);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  useInterval(() => {
    if (tiempo > 0) {
      setTiempo(tiempo - 1);
    }
  }, 1000);

  useEffect(() => {
    if (tiempo === 0) setDesactivarCanvas(true);
  }, [tiempo]);

  return (
    <div className="App">
      <NavBar />
      <h4>
        {tiempo >= 1
          ? `Tienes ${tiempo} segundo${tiempo > 1 ? "s" : ""} para dibujar`
          : `Se terminó el tiempo!`}
      </h4>
      <div className="main">
        <PokeCard pokemon={pokemon} />
        <Lienzo
          desactivarCanvas={desactivarCanvas}
          ancho={width * 0.6}
          alto={height * 0.6}
          setPokemon={setPokemon}
          getPokemon={getPokemon}
        />
        <PokeCard pokemon={pokemon} />
      </div>
    </div>
  );
}

export default App;
