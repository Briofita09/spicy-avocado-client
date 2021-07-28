import React from "react";
import { Link } from "react-router-dom";

export default function ContentTypeSelector() {
  return (
    <section>
      <nav>
        <img src="../assets/images/logos/horizontal.svg" alt="Logo">
          <h1>Spicy Avocado</h1>
        </img>

        <img
          src="../assets/images/navbar/streamline-icon-pencil-write-1@48x48.png"
          alt="Icone: Minha Lista"
        >
          <Link to="/">Minha Lista</Link>
        </img>

        <img
          src="../assets/images/navbar/streamline-icon-house-2@48x48.png"
          alt="Icone: Perfil"
        >
          <Link to="/profile">Minha Conta</Link>
        </img>
      </nav>
      <h3>O que gostaria de pesquisar?</h3>
      <Link to="/">Filmes</Link>
      <Link to="/">Series</Link>
    </section>
  );
}
