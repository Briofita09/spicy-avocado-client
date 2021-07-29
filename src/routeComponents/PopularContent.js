import React from "react";
import { Link } from "react-router-dom";

import NavBar from "../components/NavBar";

function Movies() {
  return (
    <section>
      {" "}
      <NavBar />
      <div>
        <p>Populares:</p>
        {/* carrossel */}
      </div>
      <div>
        <Link>Ação</Link>
        <Link>Aventura</Link>
        <Link>Animação</Link>
        <Link>Comédia</Link>
        <Link>Documentário</Link>
        <Link>Drama</Link>
        <Link>Fantasia</Link>
        <Link>Ficção Científica</Link>
        <Link>Mistério</Link>
        <Link>Música</Link>
        <Link>Romance</Link>
        <Link>Terror</Link>
      </div>
    </section>
  );
}

export default Movies;
