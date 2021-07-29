import React from "react";
import { Link } from "react-router-dom";
import style from "../assets/styles/PopularContent.module.scss";

import NavBar from "../components/NavBar";

function Movies() {
  return (
    <>
      <NavBar />
      <h2>
        Populares:
        {/* carrossel */}
      </h2>
      <section className={style.genresGrid}>
        <Link>
          {" "}
          <button type="button">Ação</button>{" "}
        </Link>
        <Link>
          {" "}
          <button type="button">Aventura</button>{" "}
        </Link>
        <Link>
          {" "}
          <button type="button">Animação</button>{" "}
        </Link>
        <Link>
          {" "}
          <button type="button">Comédia</button>{" "}
        </Link>
        <Link>
          {" "}
          <button type="button">Documentário</button>{" "}
        </Link>
        <Link>
          {" "}
          <button type="button">Drama</button>{" "}
        </Link>
        <Link>
          {" "}
          <button type="button">Fantasia</button>{" "}
        </Link>
        <Link>
          {" "}
          <button type="button">Ficção Científica</button>{" "}
        </Link>
        <Link>
          {" "}
          <button type="button">Mistério</button>{" "}
        </Link>
        <Link>
          {" "}
          <button type="button">Musical</button>{" "}
        </Link>
        <Link>
          {" "}
          <button type="button">Romance</button>{" "}
        </Link>
        <Link>
          {" "}
          <button type="button">Terror</button>{" "}
        </Link>
      </section>
    </>
  );
}

export default Movies;
