import React from "react";
import { Link } from "react-router-dom";
import style from "../assets/styles/ContentTypeSelector.module.scss";

import listIcon from "../assets/images/navbar/streamline-icon-pencil-write-1@48x48.png";
import accIcon from "../assets/images/navbar/streamline-icon-single-neutral_1@48x48.png";

import Logo from "../assets/images/logos/horizontal.svg";

export default function ContentTypeSelector() {
  return (
    <>
      <header>
        <img src={Logo} alt="Logo" className={style.logo} />
        <nav>
          <Link to="/watchlist" className={style.navlink}>
            <img src={listIcon} alt="Icone: Minha Lista" />
            <p>Minha Lista</p>
          </Link>

          <Link to="/profile" className={style.navlink}>
            <img src={accIcon} alt="Icone: Perfil" />
            <p>Minha Conta</p>
          </Link>
        </nav>
      </header>
      <section className={style.selectSection}>
        <h1>O que gostaria de pesquisar?</h1>
        <div>
          <Link to="/">
            <button type="button">Filmes</button>
          </Link>
          <Link to="/">
            <button type="button">Series</button>
          </Link>
        </div>
      </section>
    </>
  );
}
