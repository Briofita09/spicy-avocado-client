import React from "react";
import { Link } from "react-router-dom";

function Movies() {
  return (
    <section>
      {" "}
      <nav>
        <h1>Spicy Avocado</h1>
        <img />
        <Link to="/">Home</Link>
        <img />
        <Link to="/">Minha Lista</Link>
        <img />
        <Link to="/">Pesquisar</Link>
        <img />
        <Link to="/">Minha Conta</Link>
        <img />
      </nav>
      
    </section>
  );
}

export default Movies