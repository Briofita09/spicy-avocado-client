import React from "react";
import { Link } from "react-router-dom";

import listIcon from "../assets/images/navbar/streamline-icon-pencil-write-1@48x48.png";
import accIcon from "../assets/images/navbar/streamline-icon-single-neutral_1@48x48.png";

import Logo from "../assets/images/logos/horizontal.svg";

export default function ContentTypeSelector() {
  return (
    <section>
      <nav>
        <img src={Logo} alt="Logo" />
        <Link to="/">
          <img src={listIcon} alt="Icone: Minha Lista" />
          Minha Lista
        </Link>
        <Link to="/profile">
          <img src={accIcon} alt="Icone: Perfil" />
          Minha Conta
        </Link>
      </nav>
      <h3>O que gostaria de pesquisar?</h3>
      <Link to="/">Filmes</Link>
      <Link to="/">Series</Link>
    </section>
  );
}
